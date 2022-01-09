<template>
    <div id="map" class="Map"></div>
</template>

<script>
import L from 'leaflet'
import MarkerIcon from 'leaflet/dist/images/marker-icon.png'
import MarkerShadow from 'leaflet/dist/images/marker-shadow.png'

import config from '/src/app.config.js'

const TILE_URL = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}'
const TILE_LAYER = L.tileLayer(TILE_URL, {
    id: 'mapbox/streets-v11',
    accessToken: config['VITE_APP_MAP_TILES_ACCESS_TOKEN'],
    tileSize: 512,
    zoomOffset: -1,
})

const MARKER_ICON = L.icon({
    iconUrl: MarkerIcon,
    shadowUrl: MarkerShadow,
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
})

export default {
    name: 'Map',
    props: {
        coordinates: {
            type: Object,
            required: true,
        },
    },
    data: () => ({
        map: null,
    }),
    methods: {
        addMarker(coords) {
            const marker = L.marker(coords, { icon: MARKER_ICON })

            marker.addTo(this.map)

            this.map.setView(coords, 15)
        },
    },
    mounted() {
        this.map = L.map('map')
        this.map.addLayer(TILE_LAYER)

        this.addMarker(parseCoordinates(this.coordinates))
    },
}

function parseCoordinates(rawCoords) {
    return [rawCoords.latitude, rawCoords.longitude]
}
</script>

<style lang="scss" scoped>
.Map {
}
</style>

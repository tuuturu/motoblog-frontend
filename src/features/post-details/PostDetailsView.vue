<template>
    <div class="PostDetailsView">
        <div class="content" v-if="postID !== -1">
            <h1>{{ post.title }}</h1>

            <Map v-if="coordinates" :coordinates="coordinates" />

            <span class="date-stamp">{{ dateStamp }}</span>

            <div class="post-content" v-html="content"></div>
        </div>
    </div>
</template>

<script>
import { marked } from 'marked'

import Map from './Map.vue'

import { injectImages } from './helpers.js'
import { monthAsHuman } from './dates.js'

export default {
    name: 'PostDetailsView',
    components: {
        Map,
    },
    computed: {
        post() {
            let post = this.$store.state['posts'].posts.find(p => p.id === this.postID)

            return post
        },
        dateStamp() {
            const time = new Date(this.post.time)

            const year = time.getUTCFullYear()
            const month = monthAsHuman(time.getMonth())
            const day = time.getDate()

            return `${day}. ${month} ${year}`
        },
        content() {
            let html = marked.parse(this.post.content)

            html = injectImages(html, this.post.images)

            return html
        },
        coordinates() {
            const coords = this.post.coordinates

            if (!coords || coords.length === 0) return null

            return coords
        },
    },
    data: () => ({
        postID: -1,
    }),
    async created() {
        const id = this.$route.params.id

        await this.$store.dispatch('posts/fetchDetails', id)

        this.postID = id
    },
}
</script>

<style lang="scss" scoped>
.PostDetailsView {
    display: flex;
    justify-content: center;
}

h1 {
    margin-top: 2em;

    font-size: 42pt;
}

.content {
    width: 40%;

    display: flex;
    flex-direction: column;
}

.date-stamp {
    margin-top: 4em;
    align-self: flex-end;
}

.post-content {
    display: flex;
    flex-direction: column;

    margin-top: 1em;

    text-align: left;

    font-size: 18pt;
    line-height: 2em;
}

.Map {
    height: 248px;
}
</style>

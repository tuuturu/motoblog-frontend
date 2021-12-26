<template>
    <Header />

    <router-view></router-view>
</template>

<script>
import Header from '/src/components/Header.vue'

export default {
    components: {
        Header,
    },
}
</script>

<style lang="scss">
html,
body {
    margin: 0;
    padding: 0;
}

* {
    box-sizing: border-box;
}

#app {
    height: 100%;
    width: 100%;

    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>

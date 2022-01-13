<template>
    <div class="NewsView">
        <div class="container">
            <h1>News</h1>

            <ul class="post-list">
                <li
                    class="post-list-item"
                    v-for="post in posts"
                    :key="post.id"
                    @click="$router.push(`/posts/${post.id}`)"
                >
                    <img alt="First image from the trip" :src="ensureImage(post.images)" />

                    <div class="content">
                        <a :href="`/posts/${post.id}`">
                            <h2>{{ post.title }}</h2>
                        </a>
                        <p>{{ trimText(post.content) }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
const maxLength = 160

export default {
    name: 'NewsView',
    computed: {
        posts() {
            return this.$store.state['posts'].posts.sort(byDate)
        },
    },
    methods: {
        trimText,
        ensureImage,
    },
    async created() {
        await this.$store.dispatch('posts/fetch')
    },
}

function trimText(text) {
    let result = text

    result = result.substring(0, result.lastIndexOf(' ')) + '..'

    return result
}

function byDate(a, b) {
    return a.time < b.time
}

function ensureImage(images) {
    if (!images || images.length === 0) return 'https://via.placeholder.com/300x300'

    return images[0]
}
</script>

<style lang="scss" scoped>
@import '/src/assets/styling/theme.scss';

.NewsView {
    display: flex;
    justify-content: center;

    text-align: left;
}

.container {
    width: 50%;
}

.post-list {
    margin: 0;
    padding: 0;

    list-style: none;
}

.post-list-item {
    height: 162px;
    margin-top: 1em;

    display: flex;

    background-color: $primary-color;

    cursor: pointer;
}

img {
    height: 100%;
    min-width: 162px;
}

.content {
    margin-left: 1em;
}

a {
    text-decoration: inherit;
    color: inherit;
}
</style>

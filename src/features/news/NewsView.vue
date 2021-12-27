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
                    <img src="https://via.placeholder.com/300x300" />

                    <div class="content">
                        <h2>{{ post.title }}</h2>
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
    },
    async created() {
        await this.$store.dispatch('posts/fetch')
    },
}

function trimText(text) {
    let result = text

    if (text.length > maxLength) {
        result = text.substring(0, maxLength)
        result += '..'
    }

    return result
}

function byDate(a, b) {
    return a.time < b.time
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
}

.content {
    margin-left: 1em;
}
</style>

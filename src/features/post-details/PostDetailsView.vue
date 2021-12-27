<template>
    <div class="PostDetailsView">
        <div class="content">
            <h1>{{ post.title }}</h1>

            <span class="date-stamp">{{ dateStamp }}</span>

            <p>{{ post.content }}</p>
        </div>
    </div>
</template>

<script>
import { monthAsHuman } from './dates.js'

export default {
    name: 'PostDetailsView',
    computed: {
        post() {
            return this.$store.state['posts'].posts.find(p => p.id === this.postID)
        },
        dateStamp() {
            const time = new Date(this.post.time)

            const year = time.getUTCFullYear()
            const month = monthAsHuman(time.getMonth())
            const day = time.getDate()

            return `${day}. ${month} ${year}`
        },
    },
    data: () => ({
        postID: -1,
    }),
    async created() {
        await this.$store.dispatch('posts/fetch')

        this.postID = this.$route.params.id
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
    align-self: flex-end;
}

p {
    margin-top: 1em;

    text-align: left;

    font-size: 18pt;
    line-height: 2em;
}
</style>

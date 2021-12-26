<template>
	<div class="PostDetailsView">
    <h1>{{ post.title }}</h1>
    <span>{{ post.time }}</span>
    <p>{{ post.content }}</p>
	</div>
</template>

<script>
export default {
	name: 'PostDetailsView',
	computed: {
    post() {
      return this.$store.state['posts'].posts.find(p => p.id === this.postID)
    }
	},
  data: () => ({
    postID: -1,
  }),
	async created() {
		await this.$store.dispatch('posts/fetch')

		this.postID = this.$route.params.id
	}
}
</script>

<style lang="scss" scoped>
.PostDetailsView {}
</style>


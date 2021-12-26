import mockPosts from './mockposts.js'

const state = () => ({
	posts: [],
})

const mutations = {
	post(state, post) {
		const index = state.posts.findIndex(p => p.id === post.id)

		if(index !== -1) state.posts.splice(index, 1)

		state.posts.push(post)
	},
	posts(state, posts) {
		state.posts.splice(0, state.posts.length)

		state.posts.push(...posts)
	},
}

const actions = {
	fetch({ commit }) {
		commit('posts', mockPosts)
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
}

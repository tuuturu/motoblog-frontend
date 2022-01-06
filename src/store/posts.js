import Axios from 'axios'

import config from '/src/app.config'

const axios = Axios.create({
    baseURL: config['VITE_APP_POST_SERVICE_URL'],
})

const state = () => ({
    posts: [],
})

const mutations = {
    post(state, post) {
        const index = state.posts.findIndex(p => p.id === post.id)

        if (index !== -1) state.posts.splice(index, 1)

        state.posts.push(post)
    },
    posts(state, posts) {
        state.posts.splice(0, state.posts.length)

        state.posts.push(...posts)
    },
}

const actions = {
    async fetch({ commit }) {
        const { data } = await axios.request({
            url: '/posts',
            method: 'GET',
        })

        commit('posts', data)
    },
    async fetchDetails({ commit }, postID) {
        const { data } = await axios.request({
            url: `/posts/${postID}`,
            method: 'GET',
        })

        commit('post', data)
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}

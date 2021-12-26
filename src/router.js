import { createRouter, createWebHistory } from 'vue-router'

import PostDetailsView from '/src/features/post-details/PostDetailsView.vue'

const routes = [
	{ path: '/posts/:id', component: PostDetailsView },
]

export const router = createRouter({
	history: createWebHistory(),
	routes,
})


import { createRouter, createWebHistory } from 'vue-router'

import PostDetailsView from '/src/features/post-details/PostDetailsView.vue'

const routes = [
    { path: '/', redirect: '/posts/0082da27-ad07-46ca-a64c-9b1801e17916' },
    { path: '/posts/:id', component: PostDetailsView },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})

import { createRouter, createWebHistory } from 'vue-router'

import NewsView from '/src/features/news/NewsView.vue'
import PostDetailsView from '/src/features/post-details/PostDetailsView.vue'

const routes = [
    { path: '/', redirect: '/news' },
    { path: '/news', component: NewsView },
    { path: '/posts/:id', component: PostDetailsView },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})

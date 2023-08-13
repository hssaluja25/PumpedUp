import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import RegistrationView from '@/views/RegistrationView.vue'
import FeedView from '@/views/FeedView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: LoginView
        },
        {
            path: '/register',
            name: 'register',
            component: RegistrationView
        },
        {
            path: '/feed',
            name: 'feed',
            component: FeedView
        },
    ]
})

export default router

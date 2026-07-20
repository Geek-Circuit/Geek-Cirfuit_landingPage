import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../assets/modules/landing/presentation/views/LandingView.vue'

const routes = [
    { path: '/', name: 'landing', component: LandingView }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
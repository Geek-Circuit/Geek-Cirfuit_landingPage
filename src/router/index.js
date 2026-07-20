import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../assets/modules/landing/presentation/views/HomeView.vue'
import ProductosView from '../assets/modules/landing/presentation/views/ProductosView.vue'
import ServiciosView from '../assets/modules/landing/presentation/views/ServiciosView.vue'
import OrganizacionView from '../assets/modules/landing/presentation/views/OrganizacionView.vue'
import ConveniosView from '../assets/modules/landing/presentation/views/ConveniosView.vue'
import GeekAiView from '../assets/modules/landing/presentation/views/GeekAiView.vue'
import ContactoView from '../assets/modules/landing/presentation/views/ContactoView.vue'

const routes = [
    { path: '/', name: 'home', component: HomeView },
    { path: '/productos', name: 'productos', component: ProductosView },
    { path: '/servicios', name: 'servicios', component: ServiciosView },
    { path: '/organizacion', name: 'organizacion', component: OrganizacionView },
    { path: '/convenios', name: 'convenios', component: ConveniosView },
    { path: '/geek-ai', name: 'geek-ai', component: GeekAiView },
    { path: '/contacto', name: 'contacto', component: ContactoView }
]

export default createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        // cada vez que cambias de sección, sube al inicio de la página
        return { top: 0 }
    }
})

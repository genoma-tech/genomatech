import {createRouter, createWebHistory} from 'vue-router'

import HomePage from '@/components/HomePage.vue'
import QuienesSomos from '@/components/QuienesSomos.vue'
import Servicios from '@/components/Servicios.vue'
import Contacto from '@/components/Contacto.vue'
import PoliticaPrivacidad from "@/components/PoliticaPrivacidad.vue";
import Formulario from "@/components/Formulario.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/quienes-somos',
        name: 'quienes-somos',
        component: QuienesSomos
    },
    {
        path: '/servicios',
        name: 'servicios',
        component: Servicios
    },
    {
        path: '/contacto',
        name: 'contacto',
        component: Contacto
    },
    {
        path: '/politica',
        name: 'politica',
        component: PoliticaPrivacidad
    },
    {
        path: '/formulario',
        name: 'formulario',
        component: Formulario
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

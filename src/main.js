import './assets/css/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import {
    NButton,
    NCard,
    NInput
} from 'naive-ui'

const app = createApp(App)

const naive = {
    install (app) {
        app.component('NButton', NButton)
        app.component('NCard', NCard)
        app.component('NInput', NInput)
    }
}

app.use(naive)

app.use(router)

app.provide('theme', 'dark')

app.mount('#app')

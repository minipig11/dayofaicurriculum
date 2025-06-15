import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './assets/styles/main.css'
import vue3videoPlay from "vue3-video-play"; // 引入组件
import "vue3-video-play/dist/style.css"; // 引入css

const app = createApp(App)
app.use(router)
app.use(vue3videoPlay)
app.mount('#app')

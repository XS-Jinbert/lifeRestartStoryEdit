import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './route'

const app = createApp(App);

// 导入封装好的axios并挂载到Vue全局属性上
app.config.globalProperties.axios = axios
axios.defaults.baseURL = "http://localhost:8848"

app.use(router)
app.mount('#app');
import {createApp} from 'vue'
import './styles/index.css'
import App from './App.vue'
import router from './router/router.js'

createApp(App)
  .use(router)
  .mount('#app')
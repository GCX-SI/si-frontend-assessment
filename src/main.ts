import { configureCompat } from '@vue/compat'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// disable compat for certain features
configureCompat({
  WATCH_ARRAY: false,
})
createApp(App).use(router).mount('#app')

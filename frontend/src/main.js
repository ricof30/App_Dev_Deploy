import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import axios from 'axios' 
import store from './store';


axios.defaults.baseURL="https://dwsd-victoria.online/backend/"


loadFonts()

createApp(App)
  .use(store)
  .use(router)
  .use(vuetify)
  .mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './assets/main.css'


const app = createApp(App)
library.add(faGreaterThan)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')

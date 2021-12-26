import { createApp } from 'vue'

import { router } from '/src/router.js'
import store from '/src/store'
import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')


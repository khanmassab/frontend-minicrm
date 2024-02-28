import { createApp } from 'vue';
import router from './router/routes'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
});  

import 'bootstrap/dist/css/bootstrap.css'

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')

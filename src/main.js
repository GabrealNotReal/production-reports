import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import { createPinia } from 'pinia'
import Vue3PersianDatetimePicker from 'vue3-persian-datetime-picker'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';




import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.rtl.css'
// import './assets/sass/style.scss'

const app = createApp(App) 
app.component('DatePicker', Vue3PersianDatetimePicker)
app.component('v-select', vSelect)
app.use(router)
app.use(createPinia())
app.mount('#app')
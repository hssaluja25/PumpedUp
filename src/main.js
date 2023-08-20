import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import VeeValidatePlugin from './includes/validation.js'
import router from './router'

// CSS Files
import './assets/main.css'

// Icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faImage, faVideo, faLocationDot, faFaceLaughBeam, faHouse, faBell, faWandMagicSparkles, faGear, faBullseye, faMoon, faMagnifyingGlass, faCircleUser, faCirclePlus } from '@fortawesome/free-solid-svg-icons'

const app = createApp(App)
library.add([faImage, faFaceLaughBeam, faLocationDot, faVideo, faHouse, faBell, faWandMagicSparkles, faGear, faBullseye, faMoon, faMagnifyingGlass, faCirclePlus, faCircleUser])
app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(VeeValidatePlugin)
app.mount('#app')

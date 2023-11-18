import { createApp } from 'vue'
import { Quasar, Cookies, Notify, AppFullscreen, Loading } from 'quasar'
import i18n from './i18n';
import store from './store'
import router from './router'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import iconSet from 'quasar/icon-set/material-icons'

// Import Quasar css
import 'quasar/src/css/index.sass'
// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'
import permission from './directive/permission';
// Rigister Modules
import { registerModules } from './register-modules'
import pageErrorsModule from './modules/pageErrors'
import localeModule from './modules/locale'
import roleModule from './modules/role'
import permissionModule from './modules/permission'
import authModule from './modules/auth'
import dashboardModule from './modules/dashboard'
import userModule from './modules/user'

import certificateModule from './modules/certificate'
import settingModule from './modules/setting'
import uploadModule from './modules/upload'

registerModules({
  pageErrors: pageErrorsModule,
  locale: localeModule,
  setting: settingModule,
  role: roleModule,
  permission: permissionModule,
  auth: authModule,
  dashboard: dashboardModule,
  user: userModule,
  certificate: certificateModule,
  upload: uploadModule,
})

const myApp = createApp(App)

myApp.directive('permission', permission);
myApp.use(i18n);
myApp.use(router);
myApp.use(store);

myApp.use(Quasar, {
  iconSet: iconSet,
  plugins: {
    Cookies,
    Notify,
    AppFullscreen,
    Loading
  }, // import Quasar plugins and add here
})

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')


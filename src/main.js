import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vuetify/dist/vuetify.min.css'
import '@/assets/sass/main.sass'
import Vuetify from 'vuetify'
 Vue.use(Vuetify)

// import Vuetify, {
// 	VApp, // required
// 	VNavigationDrawer,
// 	VToolbar,
// 	VFadeTransition,
// 	VCard,
// 	VHover,
// 	VList,
// 	VListGroup,
// 	VListTile,
// 	VListTileTitle,
// 	VListTileAction,
// 	VListTileContent,
// 	VIcon,
// 	VDivider,
// 	VListTileAvatar,
// 	VBadge,
// 	VMenu,
// 	VDialog,
// 	VContent,
// 	VContainer,
// 	VBtn,
// 	VSpacer,
// 	VLayout,
// 	VFooter,
// 	VFlex,
// 	VCardTitle,
// 	VTextField,
// 	VCardActions,
// 	VToolbarSideIcon,
// 	VToolbarTitle,
// 	VCardText,
// 	VToolbarItems,
// 	VForm,
// 	VCheckbox
// } from 'vuetify/lib'
//
// import { Ripple } from 'vuetify/lib/directives'
//
// Vue.use(Vuetify, {
//   components: {
//     VApp,
//     VNavigationDrawer,
//     VToolbar,
//     VFadeTransition,
//     VCard,
// 	VHover,
//     VList,
// 	VListGroup,
// 	VListTile,
// 	VListTileTitle,
// 	VListTileAction,
// 	VListTileContent,
// 	VIcon,
// 	VDivider,
// 	VListTileAvatar,
// 	VBadge,
// 	VMenu,
// 	VDialog,
// 	VContent,
// 	VContainer,
// 	VBtn,
// 	VSpacer,
// 	VLayout,
// 	VFooter,
// 	VFlex,
// 	VCardTitle,
// 	VTextField,
// 	VCardActions,
// 	VToolbarSideIcon,
// 	VToolbarTitle,
// 	VCardText,
// 	VToolbarItems,
// 	VForm,
// 	VCheckbox
//   },
//   directives: {
//     Ripple
//   }
// });

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

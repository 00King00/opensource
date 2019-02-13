import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vuetify/dist/vuetify.min.css'
import Vuetify, {
	VApp, // required
	VNavigationDrawer,
	VToolbar,
	VFadeTransition,
	VCard,
	VList,
	VListTile,
	VListTileTitle,
	VListTileAction,
	VListTileContent,
	VIcon,
	VDivider,
	VListTileAvatar,
	VText,
	VDialog,
	VContent,
	VContainer,
	VBtn,
	VSpacer,
	VLayout,
	VFlex,
	VCardTitle,
	VTextField,
	VCardActions,
	VToolbarSideIcon,
	VToolbarTitle,
	VCardText,
	VToolbarItems,
	VForm,
	VCheckbox
} from 'vuetify/lib'

import { Ripple } from 'vuetify/lib/directives'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VToolbar,
    VFadeTransition,
    VCard,
    VList,
	VListTile,
	VListTileTitle,
	VListTileAction,
	VListTileContent,
	VIcon,
	VDivider,
	VListTileAvatar,
	VText,
	VDialog,
	VContent,
	VContainer,
	VBtn,
	VSpacer,
	VLayout,
	VFlex,
	VCardTitle,
	VTextField,
	VCardActions,
	VToolbarSideIcon,
	VToolbarTitle,
	VCardText,
	VToolbarItems,
	VForm,
	VCheckbox
  },
  directives: {
    Ripple
  }
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

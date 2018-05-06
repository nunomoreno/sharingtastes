import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import firebase from 'firebase'

firebase.initializeApp({
  apiKey: ' AIzaSyDPpqU5uk2omTEBmjTtXCqRaVOo_aqObGY ',
  authDomain: 'sharing-tastes.firebaseapp.com',
  databaseURL: 'https://sharing-tastes.firebaseio.com',
  projectId: 'sharing-tastes'
})

Vue.use(Vuetify)
Vue.use(require('vue-script2'))
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        store.dispatch('autoSignIn', firebaseUser)
      }
    })
  }
})

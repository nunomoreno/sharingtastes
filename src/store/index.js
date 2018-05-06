import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import router from '@/router'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export const store = new Vuex.Store({
  
  state: {
    events: [
      {
        id: 1, title: 'Food Festival', date: "2018-05-15", description: 'An event where everyone brings typical dishes from their culture'
      }, 
      {
        id: 2, title: 'Syrian Cinema Marathon', date: "2018-05-20", description: 'A night of movie viewing'
      },
      {
        id: 3, title:'Good Will Football Match', date: "2018-05-20", description: 'Football match to foster good will among different cultures'
      } 
    ],
    items: [
      {
        event_id: 2,  name: 'Typical Dish'
      },
      
    ],
    user: null,
    error: null,
    loading: false,
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    setLoading (state, payload) {
      state.loading = payload
  }
  },
  actions: {
    userSignUp ({commit}, payload) {
      commit('setLoading', true)
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(firebaseUser => {
       commit('setUser', {email: firebaseUser.email})
       commit('setLoading', false)
       commit('setError', null)
       router.push('/home')
      })
      .catch(error => {
       commit('setError', error.message)
       commit('setLoading', false)
      })
    },
    userSignIn ({commit}, payload) {
      commit('setLoading', true)
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(firebaseUser => {
        commit('setUser', {email: firebaseUser.email})
        commit('setLoading', false)
        commit('setError', null)
        router.push('/home')
      })
      .catch(error => {
        commit('setError', error.message)
        commit('setLoading', false)
      })
    },
    autoSignIn ({commit}, payload) {
      commit('setUser', {email: payload.email})
     },
     userSignOut ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
      router.push('/')
    }
  },
  getters: {
    isAuthenticated (state) {
      return state.user !== null && state.user !== undefined
    }
  },
  plugins: [createPersistedState()],
})

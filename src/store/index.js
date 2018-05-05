import Vue from 'vue'
import Vuex from 'vuex'

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
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {}
})

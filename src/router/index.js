import Vue from 'vue'
import Router from 'vue-router'
// import Signup from '@/components/Signup.vue'
//import EventDetail from '@/components/EventDetail.vue'

const routerOptions = [
  { path: '/', component: 'Landing' },
  { path: '/signin', component: 'Signin' },
  { path: '/signup', component: 'Signup' },
  { path: '/home', component: 'Home' }
]

const routes = routerOptions.map(route => {
    return {
        ...route,
        component: () => import(`@/components/${route.component}.vue`)
    }
})

routes.push({path: '/event/:event_id', component: () => import(`@/components/EventDetail.vue`)})

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes
})

import Vue from 'vue'
import Router from 'vue-router'
import Filter from '../components/Filter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Filter',
      component: Filter
    }
  ]
})

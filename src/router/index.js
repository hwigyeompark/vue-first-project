import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main'
import DetailPage from '../components/DetailPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/detailPage',
      name: 'detailPage',
      component: DetailPage
    }
  ]
})

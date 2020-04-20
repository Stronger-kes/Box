import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Search from '@/components/Search'
import Goods from '@/components/Goods'
import List from '@/components/List'
Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children:[
        {
          path:'goods',
          name:'Goods',
          component: Goods
        },
      ],
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})

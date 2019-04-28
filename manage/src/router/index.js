import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Manage from '@/components/Manage'
import UserList from '@/components/UserList'
import ShopList from '@/components/ShopList'
import FoodList from '@/components/FoodList'
import OrderList from '@/components/OrderList'
import AdminList from '@/components/AdminList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/manage',
      name: 'Manage',
      component: Manage
    },
    {
      path: '/userlist',
      name: 'UserList',
      component: UserList
    },
    {
      path: '/shoplist',
      name: 'ShopList',
      component: ShopList
    },
    {
      path: '/foodlist',
      name: 'FoodList',
      component: FoodList
    },
    {
      path: '/orderlist',
      name: 'OrderList',
      component: OrderList
    },
    {
      path: '/adminlist',
      name: 'adminlist',
      component: AdminList
    },
  ]
})

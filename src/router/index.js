import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Prodect from '@/components/Prodect'
// import Plan1 from '@/components/Plan1'
// import Plan2 from '@/components/Plan2'
// import Plan3 from '@/components/Plan3'
// import Plan4 from '@/components/Plan4'
import News from '@/components/News'
import Dindex from '@/components/Dindex'
import Dtest from '@/components/Dtest'
import Login from '@/components/Login'
import About from '@/components/About'
import Regist from '@/components/Regist'
import Callus from '@/components/Callus'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Prodect',
      name: 'Prodect',
      component: Prodect
    },
    {
      path: '/News',
      name: 'News',
      component: News
    },
    {
      path: '/Dindex',
      name: 'Dindex',
      component: Dindex
    },
    {
      path: '/Dtest',
      name: 'Dtest',
      component: Dtest
    },
    {
      path: '/Callus',
      name: 'Callus',
      component: Callus
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Regist',
      name: 'Regist',
      component: Regist,
      meta:{
        showCom:false
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta:{
        showCom:false
      }
    }
  ]
})

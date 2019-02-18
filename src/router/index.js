import Vue from 'vue'
import Router from 'vue-router'
// import Login from '../components/login.vue'
// webpack -> @->src
import Login from '@/components/login.vue'
import Home from '@/components/home.vue'
import Users from '@/components/users.vue'
<<<<<<< HEAD
=======
import Rights from '@/components/rights.vue'

>>>>>>> dev-users
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
    children: [{
      name: 'users',
      path: '/users',
      component: Users
<<<<<<< HEAD
    }]
=======
    },
    {
      name: 'rights',
      path: '/rights',
      component: Rights
    }
    ]
>>>>>>> dev-users
  }, {
    name: 'login',
    path: '/login',
    component: Login
  }]
})

// 回车

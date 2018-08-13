
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Home from '@/components/Home'
import SysUser from '@/components/SysComponents/SysUser'
import SysGroup from '@/components/SysComponents/SysGroup'
import SysRight from '@/components/SysComponents/SysRight'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:  '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      // redirect: '/main',
      component: Home,
      children: [
        {
          path:'/sys/group',component:SysGroup,name:'group',
          meta:{title:"用户组管理",icon:"el-icon-menu"}
        },
        {
          path: '/sys/user', component: SysUser, name: 'user',
          meta: {title: '用户管理', icon: "el-icon-menu"}
        },

        {path: '/main',component:HelloWorld,name:'hello',meta:{
            title:'首页',icon:"el-icon-menu"}
        }
      ]
    }
  ]
})

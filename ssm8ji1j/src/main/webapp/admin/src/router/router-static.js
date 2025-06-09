import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import yuangong from '@/views/modules/yuangong/list'
    import zhanwuguanli from '@/views/modules/zhanwuguanli/list'
    import bangongshiguanli from '@/views/modules/bangongshiguanli/list'
    import renliziyuanguanli from '@/views/modules/renliziyuanguanli/list'
    import caiwuguanli from '@/views/modules/caiwuguanli/list'
    import yewuguanli from '@/views/modules/yewuguanli/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/yuangong',
        name: '员工',
        component: yuangong
      }
      ,{
	path: '/zhanwuguanli',
        name: '站务管理',
        component: zhanwuguanli
      }
      ,{
	path: '/bangongshiguanli',
        name: '办公室管理',
        component: bangongshiguanli
      }
      ,{
	path: '/renliziyuanguanli',
        name: '人力资源管理',
        component: renliziyuanguanli
      }
      ,{
	path: '/caiwuguanli',
        name: '财务管理',
        component: caiwuguanli
      }
      ,{
	path: '/yewuguanli',
        name: '业务管理',
        component: yewuguanli
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;

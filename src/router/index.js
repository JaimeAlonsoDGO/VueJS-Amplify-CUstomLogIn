import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/auth/Login.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import(/* webpackChunkName: "SignUp" */ '../views/auth/SignUp.vue')
  },
  {
    path: '/confirmuser',
    name: 'ConfirmSignUp',
    component: () => import(/* webpackChunkName: "SignUp" */ '../views/auth/ConfirmSignUp.vue')
  },
  {
    path: '/resendcode',
    name: 'ResendCode',
    component: () => import(/* webpackChunkName: "SignUp" */ '../views/auth/ResendCode.vue')
  },
  {
    path: '/forgot',
    name: 'ForgotPassword',
    component: () => import(/* webpackChunkName: "ForgotPassword" */ '../views/auth/ForgotPassword.vue')
  },
  {
    path: '/newpassword',
    name: 'NewPassword',
    component: () => import(/* webpackChunkName: "NewPassword" */ '../views/auth/NewPassword.vue')
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)){
    try {
      await Vue.prototype.$Amplify.Auth.currentAuthenticatedUser();
      next();
    } catch (error) {
      next({path: '/'})
    }
  }
  else next();
});

/*
*/

export default router

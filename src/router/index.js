import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);

export default new Router({
  mode: 'history',
  // mode: 'hash',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      name: 'Home',
      component: () => import('@/pages/Home/Index'),
    },
    {
      path: '/contact-us',
      name: 'ContactUs',
      component: () => import('@/pages/ContactUs/Index'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/pages/About/Index'),
    },
    {
      path: '*',
      name: '404',
      component: () => import('@/pages/Home/Index'),
    },
  ],
});

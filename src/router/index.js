import Vue from 'vue';
import Router from 'vue-router';
import index from '@/components/index.vue';
import film from '@/components/pages/film';
import music from '@/components/pages/music';
import filmSearch from '@/components/pages/filmSearch';
import detail from '@/components/pages/detail';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '主页',
      component: index,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: '/film',
          component: film,
          name: '电影'
        },
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: '/music',
          component: music,
          name: '音乐'
        },
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: '/filmSearch',
          component: filmSearch,
          name: '搜索'
        },
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'detail/:id',
          component: detail,
          name: 'detail'
        }
      ]
    }
  ]
});

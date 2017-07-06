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
          path: '/film',
          component: film,
          name: '电影'
        },
        {
          path: '/music',
          component: music,
          name: '音乐'
        },
        {
          path: '/filmSearch',
          component: filmSearch,
          name: '搜索'
        },
        {
          path: 'detail/:id',
          component: detail,
          name: 'detail'
        }
      ]
    }
  ]
});

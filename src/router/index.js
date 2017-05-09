import Vue from 'vue';
import Router from 'vue-router';
import index from '@/components/index.vue';
import film from '@/components/pages/film';
import music from '@/components/pages/music';
Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: index,
    children: [{
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
      path: 'film',
      component: film
    },
    {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
      path: 'music',
      component: music
    }
    ]
  }],
});

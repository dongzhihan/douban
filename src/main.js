// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'element-ui/lib/theme-default/index.css';
import 'lib-flexible';
import 'mint-ui/lib/style.css';
import axios from 'axios';
import Vuex from 'vuex';
// import $ from 'jquery';

import { Field } from 'mint-ui';
// import ElementUI from 'element-ui';

import Vue from 'vue';

import FastClick from 'fastclick';
import VueRouter from 'vue-router';
import 'muse-components/styles/base.less'; // 加载基础的样式
import App from './App';
import router from './router/index.js';
// muse ui 部分

import { tabs, tab } from 'muse-components/tabs';
import appBar from 'muse-components/appBar';
import { bottomNav, bottomNavItem } from 'muse-components/bottomNav';
Vue.component(bottomNavItem.name, bottomNavItem);
Vue.component(bottomNav.name, bottomNav);
Vue.component(tabs.name, tabs);
Vue.component(tab.name, tab);
Vue.component(appBar.name, appBar);
//----------------------


//Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vuex);
require('babel-polyfill');
// //////////////////vuex+routerbeforeEach 设置路由切换效果
const store = new Vuex.Store({});
store.registerModule('www', {
  state: {
    isLoading: false,
    direction: 'forward',
    isMenu: true
  },
  mutations: {
    updateLoadingStatus(state, payload) {
      state.isLoading = payload.isLoading;
    },
    updateDirection(state, payload) {
      state.direction = payload.direction;
    },
    updateMenu(state, payload) {
      state.isMenu = payload.isMenu;
    }
  }
});
const history = window.sessionStorage;
history.clear();
let historyCount = history.getItem('count') * 1 || 0;
history.setItem('/', 0);
router.beforeEach((to, from, next) => {
  store.commit('updateLoadingStatus', {
    isLoading: true
  });
  if (to.name === 'detail' || to.path === '/filmSearch') {
    store.commit('updateMenu', {
      isMenu: false
    });
  } else {
    store.commit('updateMenu', {
      isMenu: true
    });
  }
  const toIndex = history.getItem(to.path);
  const fromIndex = history.getItem(from.path);
  if (toIndex) {
    if (
      toIndex > fromIndex ||
      !fromIndex ||
      (toIndex === '0' && fromIndex === '0')
    ) {
      store.commit('updateDirection', {
        direction: 'forward'
      });
    } else {
      store.commit('updateDirection', {
        direction: 'reverse'
      });
    }
  } else {
    ++historyCount;
    history.setItem('count', historyCount);
    to.path !== '/' && history.setItem(to.path, historyCount);
    store.commit('updateDirection', {
      direction: 'forward'
    });
  }

  if (/\/http/.test(to.path)) {
    const url = to.path.split('http')[1];
    window.location.href = `http${url}`;
  } else {
    next();
  }
});

router.afterEach(to => {
  store.commit('updateLoadingStatus', {
    isLoading: false
  });
});
// //////////////////////////////////////////////
// axios  http请求类
Vue.prototype.$http = axios;
FastClick.attach(document.body);
// ///注册
Vue.component(Field.name, Field);
// ////////////////////jquery 引入
//Vue.prototype.$jquery = $;
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app-box');

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'element-ui/lib/theme-default/index.css';
import 'lib-flexible';
import 'mint-ui/lib/style.css';
import axios from 'axios';
import Vuex from 'vuex';
import $ from 'jquery';
import {
  Field,
} from 'mint-ui';
import ElementUI from 'element-ui';
import Vue from 'vue';
import FastClick from 'fastclick';
import VueRouter from 'vue-router';
import App from './App';
import router from './router/index.js';
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vuex);
require('babel-polyfill');
// //////////////////vuex+routerbeforeEach 设置路由切换效果
const store = new Vuex.Store({});
store.registerModule('www', {
  state: {
    isLoading: false,
    direction: 'forward'
  },
  mutations: {
    updateLoadingStatus(state, payload) {
      state.isLoading = payload.isLoading;
    },
    updateDirection(state, payload) {
      state.direction = payload.direction;
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
  const toIndex = history.getItem(to.path);
  const fromIndex = history.getItem(from.path);
  if (toIndex) {
    if (toIndex > fromIndex || !fromIndex || (toIndex === '0' && fromIndex === '0')) {
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


router.afterEach((to) => {
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
Vue.prototype.$jquery = $;
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app-box');

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import ElementUI from 'element-ui'
import router from './router/index.js'
import 'element-ui/lib/theme-default/index.css'
import 'lib-flexible'
import 'mint-ui/lib/style.css'
import api from './js/api.js'
import axios from 'axios';
import $ from 'jquery';
require('babel-polyfill')
import {
  Field
} from 'mint-ui';
console.log(api)
Vue.use(ElementUI)
Vue.use(VueRouter)
//axios  http请求类
Vue.prototype.$http = axios
FastClick.attach(document.body)
/////注册
Vue.component(Field.name, Field);
//////////////////////jquery 引入
Vue.prototype.$jquery = $;
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')

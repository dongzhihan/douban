 import {
   Toast,
 } from 'mint-ui';

 const api = {
   apiConfig() {
     return {
     //  baseURL: ' https://api.douban.com',
       timeout: 1000000
 
     };
   },
   in_theaters: '/v2/movie/in_theaters',
   coming_soon: '/v2/movie/coming_soon',
   us_box: '/v2/movie/us_box'
 }; // //////////api存放位置
 export default api;

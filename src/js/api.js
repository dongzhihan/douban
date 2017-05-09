 import {
   Toast,
 } from 'mint-ui';

 const api = {
   apiConfig() {
     return {
       baseURL: ' https://api.douban.com',
       timeout: 1000000,
       transformResponse: [function (data) {

         return data;
       }],
     };
   },
   in_theaters: '/v2/movie/in_theaters',
   coming_soon: '/v2/movie/coming_soon'
 }; // //////////api存放位置
 export default api;

 import {
   Toast,
 } from 'mint-ui';

 const api = {
   apiConfig() {
     return {
 
       timeout: 1000000,
       transformResponse: [function (data) {

         return data;
       }],
     };
   },
   in_theaters: '/v2/movie/in_theaters'
 }; // //////////api存放位置
 export default api;

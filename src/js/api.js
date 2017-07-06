

const api = {
  apiConfig() {
    return {
      //  baseURL: ' https://api.douban.com',
      timeout: 1000000
    };
  },
  getfilmDetail: '/v2/movie/subject/',
  searchFilm: '/v2/movie/search?q=',
  in_theaters: '/v2/movie/in_theaters',
  coming_soon: '/v2/movie/coming_soon',
  us_box: '/v2/movie/us_box'
}; // //////////api存放位置
export default api;

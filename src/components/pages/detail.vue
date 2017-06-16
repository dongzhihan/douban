<template>
  <div id='id'>
    <div>
      <!--基本信息-->
      <div style="float:left;margin-left:0.3rem">
        <div><span class="title">{{film.title}}</span></div>
        <div><span>地区:{{film.countries[0]}}</span> <span class="margin">年份:{{film.year}}</span></div>
        <div><span v-for="(genre,index) in film.genres"> {{genre}}</span></div>
        <div style="display:flex">
          <rater :rating='film.rating.average'></rater>
          <div class="margin gray"><span>{{film.ratings_count}}评价</span></div>
        </div>
      </div>
      <!--图片-->
      <div style="float:right;margin-top:20px"><img style="height:5rem;width:3rem" :src="film.images.large" alt=""></div>
    </div>
    <!--演员-->
    <div style="clear:both"></div>
    <div style="display:flex;width:100%;overflow-x:auto">
      <div v-for="(cast,index) in film.casts">
        <img :src="cast.avatars.small">
        <span>{{cast.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import api from '../../js/api.js';

  export default {
    components: {

    },
    data() {
      return {
        film: ''
      };
    },
    created() {
      this.$http.get(`${api.getfilmDetail}${this.$route.params.id}`, api.apiConfig()).then((films) => {
        this.film = films.data;
      });
      // document.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxb9ac217246beca88&redirect_uri=http://api.yundaili.com/api/loginSure&response_type=code&scope=snsapi_userinfo&state=123&connect_redirect=1#wechat_redirect"
    }
  };

</script>

<style scoped>
  .margin {
    margin-left: 30px
  }

  .gray {
    color: gray
  }

  .title {
    font-size: 30px;
  }

</style>

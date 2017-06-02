<template>
  <div id='id'>
    <search v-model='searshText' @on-submit="searshFilm"></search>
    <div>
      <div style="display:flex;position:relative;" v-for="(item,index) in filmList">
        <div>
          <a :href="item.alt"><img style="height:4rem;width:3rem" :src="item.images.small" :alt="item.alt"></a>
        </div>
        <div class="flim-name">
          <span> {{item.title}} </span>
          <div>
            <div><span>年份：{{item.year}}</span></div>
            <!--标签-->
            <div style="display:flex">
              标签：
              <div style="margin-left:0.1rem" v-for="(genre,index) in item.genres">{{genre}}</div>
            </div>
            <div style="display:flex;flex-wrap: wrap">
              演员：
              <div style="margin-left:0.1rem" v-for="(cast,index) in item.casts">{{cast.name}}</div>
            </div>
            <rater style="position:absolute;bottom:0" :rating='item.rating.average'></rater>
            </rater>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import api from '../../js/api.js';
  import Rater from '../com/rater.vue';
  import {
    Search,
    Group,
    Cell,
    XButton
  } from 'vux';
  export default {
    components: {
      Search,
      Group,
      Cell,
      XButton,
      Rater
    },
    data() {
      return {
        searshText: '',
        filmList: []
      };
    },
    methods: {
      searshFilm() {
        this.$http.get(`${api.searchFilm}${this.searshText}`, api.apiConfig()).then((films) => {
          this.filmList = films.data.subjects;
        });
      }
    }


  };

</script>

<style scoped>


</style>

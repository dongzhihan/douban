<template>
  <div id='id'>
    <search v-model='searshText' @on-submit="searshFilm"></search>
    <div>
      <div v-for="(item,index) in filmList">
        <div>
          <a :href="item.alt"><img style="height:4rem" :src="item.images.medium" :alt="item.alt"></a>
        </div>
        <div class="flim-name">
          <span> {{item.title}} </span>
        </div>
        <div>
          <rater :rating='item.rating.average'></rater>
          </rater>
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

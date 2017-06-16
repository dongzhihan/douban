<template>
  <div id='id'>

    <!--正在热映-->
    <div>
      <div><span class="flim-title">正在热映</span>
        <div style="float:right; font-size: 0.5rem;"><a href="">更多</a> </div>
      </div>
      <div style="display:flex;width:100%;overflow-x: auto;">
        <div class="filmList" v-for="(item,index) in theatersList">
          <div>
            <router-link :to="{ name: 'detail', params: { id: item.id }}"><img style="height:4rem" :src="item.images.small" :alt="item.alt"></router-link>
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

    <!--即将上映-->
    <div>
      <div><span class="flim-title">即将上映</span>
        <div style="float:right; font-size: 0.5rem;"><a href="">更多</a> </div>
      </div>
      <div style="display:flex;width:100%;overflow-x: auto;">
        <div class="filmList" v-for="(item,index) in comingSoonList">
          <div>
            <a :href="item.alt"><img style="height:4rem" :src="item.images.small" :alt="item.alt"></a>
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
    <!--即将上映-->
    <!--    <div>
      <div><span class="flim-title">口碑电影</span>
        <div style="float:right; font-size: 0.5rem;"><a href="">更多</a> </div>
      </div>
      <div style="display:flex;width:100%;overflow-x: auto;">
        <div v-for="(item,index) in usBoxBList">
          <div>
            <a :href="item.alt"><img style="height:4rem" :src="item.images.medium" :alt="item.alt"></a>
          </div>
          <div class="flim-name">
            <span> {{item.title}} </span>
          </div>
        </div>
      </div>
    </div>-->
  </div>

</template>

<script>
  import api from '../../js/api.js';
  import Rater from '../com/rater.vue';
  export default {
    data() {
      return {
        theatersList: [],
        comingSoonList: []
      };
    },
    mounted() {
      this.$http.get(`${api.in_theaters}?count=6`, api.apiConfig()).then((films) => {
        this.theatersList = films.data.subjects;
      });
      this.$http.get(`${api.coming_soon}?count=6`, api.apiConfig()).then((films) => {
        this.comingSoonList = films.data.subjects;
      });
    },
    methods: {},
    components: {
      Rater
    }
  };

</script>

<style scoped>
  .flim-title {
    font-size: 0.5rem;
    font: bold;
    font-style: italic;
  }

  .flim-name {
    text-align: center;
    font-size: 0.2rem;
  }

  .filmList {
    margin-left: 0.3rem;
  }

</style>

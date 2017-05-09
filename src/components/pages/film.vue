<template>
  <div id='id'>

    <!--正在热映-->
    <div>
      <div><span class="flim-title">正在热映</span></div>
      <div style="display:flex">
        <div v-for="(item,index) in theatersList">
          <div>
            <a :href="item.alt"><img style="height:4rem" :src="item.images.medium" :alt="item.alt"></a>
          </div>
          <div class="flim-name">
            <span> {{item.title}} </span>
          </div>
        </div>
      </div>
    </div>

    <!--即将上映-->
    <div>
      <div><span class="flim-title">即将上映</span></div>
      <div style="display:flex">
        <div v-for="(item,index) in comingSoonList">
          <div>
            <a :href="item.alt"><img style="height:4rem" :src="item.images.medium" :alt="item.alt"></a>
          </div>
          <div class="flim-name">
            <span> {{item.title}} </span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import api from '../../js/api.js';
  export default {
    data() {
      return {
        theatersList: [],
        comingSoonList: []
      };
    },
    mounted() {
      this.$http.get(`${api.in_theaters}?count=6`).then((films) => {
        this.theatersList = films.data.subjects;
      });
      this.$http.get(`${api.coming_soon}?count=6`).then((films) => {
        this.comingSoonList = films.data.subjects;
      });
    },
    methods: {
      getFilm() {}
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

</style>

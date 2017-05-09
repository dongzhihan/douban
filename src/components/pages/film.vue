<template>
  <div id='id'>
    电影
    <div style="display:flex;flex-wrap:wrap">
    <div v-for="(item,index) in theatersList"  > {{item.title}} 
      <div><img :src="item.images.medium" :alt="item.alt"></div>
    </div>
    </div>
  </div>

</template>

<script>
  import api from '../../js/api.js';
  export default {
    data() {
      return {
        theatersList: []
      };
    },
    mounted() {
      this.$http.get(`${api.in_theaters}?count=6`).then((films) => {
           console.log(films.data.subjects);
        this.theatersList = films.data.subjects;
        console.log(films.data.subjects);
        console.log(this.theatersList);
      });
    },
    methods: {
      getFilm() {

      }
    }

  };

</script>

<style scoped>


</style>

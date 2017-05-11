<template>
  <div id='id'>
    <div style="display:flex">
      <div v-for="(item,index) in ratingList">
        <a class="vux-rater-box is-active" style="color: rgb(204, 204, 204); margin-right: 2px; font-size: 15px; width: 15px; height: 15px; line-height: 15px;"><span class="inner">★<span class="outer" style="color: rgb(4, 190, 2); width: item+'%';" :style="{ width: item+'%' }">★</span></span>
        </a>
      </div>
      <div>    <span>{{rating}}</span></div>
    </div>

  </div>
</template>
<script>
  export default {
    props: ['rating'],
    data() {
      return {
        ratingList: [0, 0, 0, 0, 0]
      };
    },
    // 初始化两种办法设置评分
    mounted() {
      const size = this.rating / 2;
      let i = 0;
      for (i = 0; i < size - 1; i += 1) {
        //this.ratingList.splice(i, 1, 100);
        this.$set(this.ratingList, i, 100);
      }
      if (size - 1 - i !== 0) {
        // this.ratingList.splice(i, 1, Math.abs((i - 1 - size) * 50))

        this.$set(this.ratingList, i, ((this.rating - (i * 2)) * 50));
      }
      console.log(this.ratingList);
    }

  };

</script>

<style scoped>
  .outer {
    position: absolute;
    left: 0;
    top: 0;
    display: inline-block;
    overflow: hidden;
  }

  .inner {
    position: relative;
    display: inline-block;
  }

</style>

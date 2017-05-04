<template>
  <div>
    <div style="width: 100%;height: 1.5rem;font-size:1rem;display: flex;justify-content: center;align-items: center ">     kaikeng </div>
    <div style="margin-top: 1rem"> </div>

  </div>
</template>
<style>


</style>
<script>
  import api from '../js/api';
  import {
    Tabbar,
    TabbarItem,
    XButton,
  } from 'vux';
  export default {
    data() {
      return {

      };
    },
    components: {
      Tabbar,
      TabbarItem,
      XButton,
    },
    methods: {
      goTo(path) {
        const data = {
          pagename: path,
          password: sessionStorage["userName"]
        }
        this.$http.post(api.xxx, data, api.config).then((data) => {
          if (data.data.Errcode === 0) {
            this.$router.push(`/index/${path}`);
          }
        })
      }
    }
  }

</script>

<template>
  <div >
    <loading v-model="isLoading"></loading>
    <x-header :left-options="{showBack: false}">{{title}}
      <div slot="right" @click="goTo()">
        <x-icon type="ios-search-strong" size="30"></x-icon>
      </div>
    </x-header>
    <view-box ref="viewBox">
      <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
        <router-view class="router-view"></router-view>
      </transition>
    </view-box>
    <tabbar v-show="$store.state.www.isMenu">
      <tabbar-item link="/film">
        <img slot="icon">
        <span slot="label">电影</span>
      </tabbar-item>
      <tabbar-item link="/music">
        <img slot="icon">
        <span slot="label">图书</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon">
        <span slot="label">音乐</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import {
    Tabbar,
    TabbarItem,
    XHeader,
    ViewBox,
    Loading
  } from 'vux';
  import {
    mapState
  } from 'vuex';
  import api from '../js/api';

  export default {
    data() {
      return {

      };
    },
    components: {
      Tabbar,
      TabbarItem,
      XHeader,
      ViewBox,
      Loading
    },
    computed: {
      // 动画效果切换+loading
      ...mapState({
        isLoading: state => state.www.isLoading,
        direction: state => state.www.direction
      }),
      title() {
        console.log(this.$route.name);
        return this.$route.name;
      }
    },
    methods: {
      goTo() {
        this.$router.push('filmSearch');
      }
    }
  };

</script>
<style>
  .router-view {
    width: 100%;
    animation-duration: 0.5s;
    animation-fill-mode: both;
    backface-visibility: hidden;
  }

  .vux-pop-out-enter-active,
  .vux-pop-out-leave-active,
  .vux-pop-in-enter-active,
  .vux-pop-in-leave-active {
    will-change: transform;
    height: 100%;
    position: absolute;
    left: 0;
  }

  .vux-pop-out-enter-active {
    animation-name: popInLeft;
  }

  .vux-pop-out-leave-active {
    animation-name: popOutRight;
  }

  .vux-pop-in-enter-active {
    perspective: 1000;
    animation-name: popInRight;
  }

  .vux-pop-in-leave-active {
    animation-name: popOutLeft;
  }

  @keyframes popInLeft {
    from {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes popOutLeft {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
  }

  @keyframes popInRight {
    from {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes popOutRight {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
  }

</style>

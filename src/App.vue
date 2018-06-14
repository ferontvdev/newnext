<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>  
</template>

<script>
  import Navbar from '@/components/Navbar'

  import Slider from './components/slider/slider'
  import elements from './components/slider/elements';
  let slider = new Slider({
    elements,
    animationFunc: function(element) {
      // console.log(element);
    },
    speed: 5000
  });

  slider.play();

  export default {
    name: 'app',
    components: { Navbar },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
      }
    }
  }
</script>

<style lang="scss">
  @import '~@/scss/main.scss';
</style>
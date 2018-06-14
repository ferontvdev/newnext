<template>
  <div class="container">
    <slider animation="fade">
      <slider-item v-for="(i, index) in list" :key="index">
        <div>
          <p>{{i.title}}</p>
          <img  v-bind:src="i.image">
        </div>
      </slider-item>
    </slider>
  </div>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider'
import elements from './slider/elements'
export default {
  data () {
    return {
      list: elements
    }
  },
  components: {
    Slider,
    SliderItem
  }
}
</script>


<style lang="scss" scoped>

</style>
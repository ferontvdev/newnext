<template>
  <div class="container">
    <slider animation="fade" height="600px" auto= false>
      <slider-item v-for="(i, index) in list" :key="index">
        <div>
          <img  v-bind:src="i.image">
        </div>
      </slider-item>
    </slider>
  </div>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider'
export default {
  data () {
    return {
      list: [
        {
          id: 1,
          image: require('@/assets/images/1.jpg')
        },
        {
          id: 2,
          image: require('@/assets/images/2.jpg')
        },
        {
          id: 3,
          image: require('@/assets/images/3.jpg')
        },
        {
          id: 4,
          image: require('@/assets/images/4.jpg')
        },
        {
          id: 5,
          image: require('@/assets/images/5.jpg')
        },
        {
          id: 6,
          image: require('@/assets/images/6.jpg')
        },
        {
          id: 7,
          image: require('@/assets/images/7.jpg')
        },
        {
          id: 8,
          image: require('@/assets/images/8.jpg')
        },
        {
          id: 9,
          image: require('@/assets/images/9.jpg')
        },
        {
          id: 10,
          image: require('@/assets/images/10.jpg')
        },
        {
          id: 11,
          image: require('@/assets/images/11.jpg')
        },
      ]
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
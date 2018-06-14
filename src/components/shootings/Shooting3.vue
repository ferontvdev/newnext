<template>
  <div class="container">
    <slider animation="fade" height="1400px" auto= false>
      <slider-item v-for="(i, index) in list" :key="index">
        <div>
          <p>{{i.data}}</p>
          <p>{{i.data2}}</p>
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
          data: 'JEFFREY CAMPBELL',
          data2: 'Tennis de plataforma de Jeffrey Campbell, con contraste de blanco y negro y detalles en brillantina.',
          image: require('@/assets/images/1JEFFREY.jpg')
        },
        {
          id: 2,
          data: 'ZARA',
          data2: 'Tennis blancos con detalles de rayas en plataforma.',
          image: require('@/assets/images/2ZARA.jpg')
        },
        {
          id: 3,
          data: 'MANGO',
          data2: 'Tennis con resorte y estructura de plástico. ',
          image: require('@/assets/images/3MANGO.jpg')
        },
        {
          id: 4,
          data: 'JEFFREY CAMPBELL',
          data2: 'Bota de piel negra con plataforma y detalles en solapa de flecos.',
          image: require('@/assets/images/4JEFFREY.jpg')
        }
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
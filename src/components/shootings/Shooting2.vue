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
          data: 'En él: Suéter de H&M / Jeans negros de CALVIN KLEIN / Tennis de CALVIN KLEIN / Accesorios de SWAROVSKI / Paliacate del mercado',
          data2: 'En ella: Blusa estampada de ZARA / Chamarra biker roja de ZARA / Mini falda de charol de H&M / Medias de red de OYSHO  / Botas de plataforma de Jeffrey Campbell / Accesorios propios / Casco Custom Rock',
          image: require('@/assets/images/LOOK1.jpg')
        },
        {
          id: 2,
          data: 'En él: Jeans rotos de TRUE RELIGION / Chaleco vintage familiar / Playera sin mangas de CALVIN KLEIN / Tennis de CALVIN KLEIN / Paliacate del mercado / Accesorios de SWAROVSKI',
          data2: 'En ella: Jeans militares de SEXY JEANS / Botas de ZARA / Crop top de NUSANQ / Chamarra biker de mezclilla de BANDIT / Lentes de H&M / Casco de CUSTOM ROCK / Accesorios propios',
          image: require('@/assets/images/LOOK2.jpg')
        },
        {
          id: 2,
          data: '',
          data2: 'En ella: Jeans militares de SEXY JEANS / Botas de ZARA / Crop top de NUSANQ / Chamarra biker de mezclilla de BANDIT / Lentes de H&M / Casco de CUSTOM ROCK / Accesorios propios',
          image: require('@/assets/images/LOOK2B.jpg')
        },
        {
          id: 3,
          data: 'En él: Jeans de CALVIN KLEIN / Botas TIMBERLAND / Playera de DIESEL / Chamarra de MONTANA / Sombrero de CUSTOM ROCK',
          data2: 'En ella: Jeans negros de DIESEL / Botines de ZARA / Playera de mesh de H&M / Collar de MANGO',
          image: require('@/assets/images/LOOKY.jpg')
        },
        {
          id: 3,
          data: 'En él: Jeans de CALVIN KLEIN / Botas TIMBERLAND / Playera de DIESEL / Chamarra de MONTANA / Sombrero de CUSTOM ROCK',
          data2: 'En ella: Jeans negros de DIESEL / Botines de ZARA / Playera de mesh de H&M / Collar de MANGO',
          image: require('@/assets/images/LOOK3Z.jpg')
        },
        {
          id: 4,
          data: 'Vestido de hombreras de ZARA / Botas militares de ZARA / Chamarra biker de BANDIT / Accesorios propios',
          data2: '',
          image: require('@/assets/images/LOOK4.jpg')
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
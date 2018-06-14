<template>
  <div class="container">
    <slider animation="fade" height="1400px" interval="6000">
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
          data: 'Vestido/blusa con faja de MANCANDY / Chaleco de mezclilla roto de ZARA / Calcetines de red de OYSHO / Botas de plataforma de JEFFREY CAMPBELL / Accesorios y lentes oscuros propios',
          data2: '',
          image: require('@/assets/images/LOOK1A.jpg')
        },
        {
          id: 1,
          data: 'Vestido/blusa con faja de MANCANDY / Chaleco de mezclilla roto de ZARA / Calcetines de red de OYSHO / Botas de plataforma de JEFFREY CAMPBELL / Accesorios y lentes oscuros propios',
          data2: '',
          image: require('@/assets/images/LOOK1D.jpg')
        },
        {
          id: 1,
          data: 'Vestido/blusa con faja de MANCANDY / Chaleco de mezclilla roto de ZARA / Calcetines de red de OYSHO / Botas de plataforma de JEFFREY CAMPBELL / Accesorios y lentes oscuros propios',
          data2: '',
          image: require('@/assets/images/LOOK1g.jpg')
        },
        {
          id: 2,
          data: 'Bomber capitonada oversized naranja de H&M / Pantalones de mezclilla rotos de MANCANDY / Top escotado de FOREVER 21 / Tennis con plástico de MANGO / Lentes transparentes de DIOR / Accesorios propios',
          data2: '',
          image: require('@/assets/images/LOOK2A.jpg')
        },
        {
          id: 2,
          data: 'Bomber capitonada oversized naranja de H&M / Pantalones de mezclilla rotos de MANCANDY / Top escotado de FOREVER 21 / Tennis con plástico de MANGO / Lentes transparentes de DIOR / Accesorios propios',
          data2: '',
          image: require('@/assets/images/LOOK2E.jpg')
        },
        {
          id: 3,
          data: 'Playera de DIE ANTWOORD / Corsét de MANCANDY / Conjunto de gabardina y pantalones acampanados / LEGO COLLECTION / Tennis Vans / Accesorios propios',
          data2: '',
          image: require('@/assets/images/LOOK3.jpg')
        },
        {
          id: 3,
          data: 'Playera de DIE ANTWOORD / Corsét de MANCANDY / Conjunto de gabardina y pantalones acampanados / LEGO COLLECTION / Tennis Vans / Accesorios propios',
          data2: '',
          image: require('@/assets/images/LOOK3A.jpg')
        },
        {
          id: 4,
          data: 'Vestido de punto de ADIDAS EQUIPMENT / Tennis de PUMA / Chamarra bomber de NUGGET / Beannie de STRADIVARIUS / Accesorios propios',
          data2: '',
          image: require('@/assets/images/LOOK4A.jpg')
        },
        {
          id: 4,
          data: 'Vestido de punto de ADIDAS EQUIPMENT / Tennis de PUMA / Chamarra bomber de NUGGET / Beannie de STRADIVARIUS / Accesorios propios',
          data2: '',
          image: require('@/assets/images/LOOK4B.jpg')
        },
        {
          id: 5,
          data: 'Vestido tricolor de red de ZARA / Pantalones de mezclilla acampanados de ZARA / Tennis de MANGO / Chamarra de lana de MANCANDY / Accesorios propios',
          data2: '',
          image: require('@/assets/images/LOOK5.jpg')
        },
        {
          id: 5,
          data: 'Vestido tricolor de red de ZARA / Pantalones de mezclilla acampanados de ZARA / Tennis de MANGO / Chamarra de lana de MANCANDY / Accesorios propios',
          data2: '',
          image: require('@/assets/images/LOOK5A.jpg')
        },
        {
          id: 5,
          data: 'Vestido tricolor de red de ZARA / Pantalones de mezclilla acampanados de ZARA / Tennis de MANGO / Chamarra de lana de MANCANDY / Accesorios propios',
          data2: '',
          image: require('@/assets/images/LOOK5B.jpg')
        },
        {
          id: 5,
          data: 'Vestido tricolor de red de ZARA / Pantalones de mezclilla acampanados de ZARA / Tennis de MANGO / Chamarra de lana de MANCANDY / Accesorios propios',
          data2: '',
          image: require('@/assets/images/LOOK5D.jpg')
        },
        {
          id: 5,
          data: 'Vestido tricolor de red de ZARA / Pantalones de mezclilla acampanados de ZARA / Tennis de MANGO / Chamarra de lana de MANCANDY / Accesorios propios',
          data2: '',
          image: require('@/assets/images/LOOK5F.jpg')
        },
        {
          id: 6,
          data: 'Vestido estampado de ZARA / Botas militares de ZARA / Trench coat de MANCANDY / Beannie de Stradivarius / Accesorios propios',
          data2: '',
          image: require('@/assets/images/LOOK6A.jpg')
        },
        {
          id: 6,
          data: 'Vestido estampado de ZARA / Botas militares de ZARA / Trench coat de MANCANDY / Beannie de Stradivarius / Accesorios propios',
          data2: '',
          image: require('@/assets/images/LOOK6C.jpg')
        },
        {
          id: 7,
          data: 'Playera de RED BULL X FIGHTERS / Chamarra oversized de ELEMENT / Pantalón/falda de ZARA / Calcetines de red de OYSHO / Tennis de JEFFREY CAMPBELL / Accesorios propios',
          data2: '',
          image: require('@/assets/images/LOOK7.jpg')
        },
        {
          id: 7,
          data: 'Playera de RED BULL X FIGHTERS / Chamarra oversized de ELEMENT / Pantalón/falda de ZARA / Calcetines de red de OYSHO / Tennis de JEFFREY CAMPBELL / Accesorios propios',
          data2: '',
          image: require('@/assets/images/LOOK7A.jpg')
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
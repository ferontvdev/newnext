<template>
  <div>
    <section id="home">
      <div class="grid">
        <div class="container">
          <div class="grid-main-area-first hero">
            <div class="text text-hero">
              <h1>Somos newnext</h1>
              <p>#thestreetismyhome es un grito a nuestras subculturas que guardan secretos, que trascienden con un estilo único y que conquistan el mundo actual del estilo callejero, volviéndolo toda una experiencia de vida</p>
            </div>
            <div class="slogan">
              <h2>the</h2>
              <h2>street</h2>
              <h2>is my</h2>
              <h2>home/</h2>
            </div>
            <div class="explorebtn">
              <a href="#mission" class="btn_">Ver más</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
        <div class="cover parallax">
          <p>
            Take the streets
            <span>WEAR THE STREETS</span>
          </p>
        </div>
      </section>

      <section id="mission">
        <div class="grid full-height mission">
          <div class="container">
            <h1>ACERCA DE</h1>
            <figure>
              <img src="@/assets/images/LOOK5A.jpg" alt="Imagen de stock de restaurante" height="400">
              <figcaption>newnext</figcaption>
            </figure>
            <p>En esta nueva plataforma buscamos reivindicar la tendencia del streetwear, a través de un tributo al eclecticismo de lo urbano, pues creemos que este estilo ha rediseñado la forma en que vemos al mundo. Es una celebración a las diferentes tribus que se reúnen a conmemorar la vida callejera de la ciudad, las construcciones, los colores, el arte urbano y la apropiación y sensación del momento reflejados a través de la moda. </p>
          </div>
        </div>
      </section>
    </div>
</template>

<script>
  export default {
    name: 'app',
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
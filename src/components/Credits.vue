<template>
  <section id="social">
    <div class="grid">
      <div class="container social">
        <p class="title">CRÉDITOS Y AGRADECIMIENTOS</p>
        <h2>Estilistas</h2>
        <div class="container-credits">
          <div class="stylers">
            <p>Stephanie Blanco</p>
          </div>
          <div class="stylers">
            <p>Valerie Aranda</p>
          </div>
          <div class="stylers">
            <p>Liz Campos</p>
          </div>
        </div>
        <h2>Modelos</h2>
        <div class="container-credits">
          <div class="stylers">
            <p>Jenn Rojo</p>
          </div>
          <div class="stylers">
            <p>Mariana Alcántara</p>
          </div>
          <div class="stylers">
            <p>Sebastián Blanco</p>
          </div>
        </div>
        <h2>Crew</h2>
        <div class="container-credits">
          <div class="name-container">
            <ul>
              <li><b>Adrián Hernández</b></li>
              <li><b>Fernando Ontiveros</b></li>
              <li><b>Tony Romano</b></li>
            </ul>
          </div>
          <div class="duty-container">
            <ul>
              <li>Fotógrafo</li>
              <li>Diseñador Web</li>
              <li>Tienda Custom Rock Garage</li>
            </ul>
          </div>
        </div>
        <h2>Gracias a todos los artistas urbanos.</h2>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  ul {
    padding-left: 0;
  }
  li {
    list-style-type: none;
  }
  .container-credits {
    display: flex;
    flex-direction: row;
  }
  .name-container, .duty-container {
    width: 50%;
  }
  .stylers {
    width: 33.3333333333%;
  }
</style>

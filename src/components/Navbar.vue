<template>
  <header>
    <div class="navbar">
      <span>nextnew</span>
      <div class="links-box"> 
        <router-link to="/" class="links">Home</router-link>
        <router-link to="shootings" class="links">Shootings</router-link>
        <router-link to="comparatives" class="links">Inspiración</router-link>
        <router-link to="contact" class="links">Contacto</router-link>
        <router-link to="credits" class="links">Créditos</router-link>
      </div>
    </div>
    <div class="menu">
      <a v-on:click="show = !show">
        <img src="@/assets/svg/menu.svg" alt="Botón para menú">
      </a>
    </div>
    <transition name="fade">
      <div class="menu-screen" v-if="show">
        <a v-on:click="show = !show" class="close">
          <img src="@/assets/svg/closemenu.svg" alt="Botón para cerrar el menú">
        </a>
        <nav>
          <router-link to="/" class="links" @click.native="show = !show">
            <span class="main">Home</span>
          </router-link>
          <router-link to="shootings" class="links" @click.native="show = !show">
            <span class="main">Shootings</span>
          </router-link>
          <router-link to="comparatives" class="links" @click.native="show = !show">
            <span class="main">Comparativas</span>
          </router-link>
          <router-link to="contact" class="links" @click.native="show = !show">
            <span class="main">Contacto</span>
          </router-link>
          <router-link to="credits" class="links" @click.native="show = !show">
            Créditos
          </router-link>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        show: false
      }
    }
  }
</script>

<style lang="scss">
  @import '~@/scss/main.scss';
</style>
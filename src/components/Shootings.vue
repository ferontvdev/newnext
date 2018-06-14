<template>
  <section>
    <div class="grid">
      <div class="container_ social">
        <p class="title">SHOOTINGS</p>
        <tabs>
          <tab name="TAKE IT TO THE STREETS">
            <div class="grid full-height mission">
              <div class="container">
                <h1>TAKE IT TO THE STREETS</h1>
                <p>La idea de la cultura del remix ha sido un principio básico del hip-hop. Esta vez lo llevamos a la presentación visual de colores llamativos, siluetas audaces y lugares arquitectónicos representativos de lo urbano, a través de la evolución de prendas con la cualidad inefable de permanecer siempre cool.  </p>
                <shooting1></shooting1>
              </div>
            </div>
          </tab>
          <tab name="FREE RIDERS">
            <div class="grid full-height mission">
              <div class="container">
                <h1>FREE RIDERS</h1>
                <p>En un ambiente citadino, no olvidemos la intrepidez libre de los motociclistas. Con un estilo vintage, pero edgy, las chamarras bikers y los chalecos se vuelven los protagonistas para provocar un giro osado a esta afición tan legendaria. </p>
                <shooting2></shooting2>
              </div>
            </div>
          </tab>
          <tab name="VOLUME HEIGHTS">
            <div class="grid full-height mission">
              <div class="container">
                <h1>VOLUME HEIGHTS</h1>
                <p>Pasos agigantados son los que se recorren en una ciudad tan activa y cosmopolita donde lo sport-chic, el arte urbano y los colores llamativos conviven para crear subversivo. </p>
                <shooting3></shooting3>
              </div>
            </div>
          </tab>
        </tabs>
      </div>
    </div>
  </section>
</template>

<script>
import Shooting1 from '@/components/shootings/Shooting1';
import Shooting2 from '@/components/shootings/Shooting2';
import Shooting3 from '@/components/shootings/Shooting3';
import {Tabs, Tab} from 'vue-tabs-component';
export default {
  components: { Shooting1, Shooting2, Shooting3, Tabs, Tab }
}
</script>

<style lang="scss">
  .tabs-component {
    margin: 4em 0;
  }

  .tabs-component-tabs {
    border: solid 1px #ddd;
    border-radius: 6px;
    margin-bottom: 5px;
  }

  @media (min-width: 700px) {
    .tabs-component-tabs {
      border: 0;
      align-items: stretch;
      display: flex;
      justify-content: flex-start;
      margin-bottom: -1px;
    }
  }

  .tabs-component-tab {
    color: #999;
    font-size: 14px;
    font-weight: 600;
    margin-right: 0;
    list-style: none;
  }

  .tabs-component-tab:not(:last-child) {
    border-bottom: dotted 1px #ddd;
  }

  .tabs-component-tab:hover {
    color: #666;
  }

  .tabs-component-tab.is-active {
    color: #000;
  }

  .tabs-component-tab.is-disabled * {
    color: #cdcdcd;
    cursor: not-allowed !important;
  }

  @media (min-width: 700px) {
    .tabs-component-tab {
      background-color: #fff;
      border: solid 1px #ddd;
      border-radius: 3px 3px 0 0;
      margin-right: .5em;
      transform: translateY(2px);
      transition: transform .3s ease;
    }

    .tabs-component-tab.is-active {
      border-bottom: solid 1px #fff;
      z-index: 2;
      transform: translateY(0);
    }
  }

  .tabs-component-tab-a {
    align-items: center;
    color: inherit;
    display: flex;
    padding: .75em 1em;
    text-decoration: none;
  }

  .tabs-component-panels {
    padding: 0px;
  }

  @media (min-width: 700px) {
    .tabs-component-panels {
      border-top-left-radius: 0;
      background-color: #fff;
      border: solid 1px #ddd;
      border-radius: 0 6px 6px 6px;
      box-shadow: 0 0 10px rgba(0, 0, 0, .05);
      padding: 4em 2em;
    }
  }
</style>


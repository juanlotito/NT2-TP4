<template>
  <div id="app">
    <Navegacion></Navegacion>
<router-view> </router-view>


  </div>
</template>

<script>
import Navegacion from './components/Navegacion.vue'

export default {
  name: 'App',
  components: {
    Navegacion,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

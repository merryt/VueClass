<template>
  <h1 id="app">{{ msg }}</h1>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'test'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

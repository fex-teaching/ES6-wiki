<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'
import ajax from './utils/ajax'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    axios.get('/api/news').then(res => {
      console.log(res.data)
    })
    ajax({
      url: '/api/news',
      method: 'get',
      success: function(res) {
        console.log('res', res)
      }
    })
  },
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

<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="clickHandler">按钮</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'
import ajax from './utils/ajax'

function throtthle(fn, delay = 2000) {
  let init;
  return function () {
    const now = Date.now();
    if (!init) {
      init = now;
      fn.call()
    }
    if (now > init + delay) {
      init = undefined;
    }
  }
}


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
  methods: {
    clickHandler: throtthle(() =>{
      console.log('0000')
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

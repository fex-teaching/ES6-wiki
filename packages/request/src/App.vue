<template>
  <div>
    <div v-demo>
      ssss
      <!-- <input v-focus="focusHandler"> -->
    </div>
    <div style="height: 800px"></div>
    <div class="adx-wrap" ref="adxwrap">
      <!-- <img v-if="show" src="./assets/logo.png"> -->
      <Temp v-if="show" url="https://boxcdn.zuoyebang.cc/v1/zyb-srmp/0cbb3698/275f4280-a391-4b34-823c-52b095247205.png" />
    </div>
    <div style="height: 200px"></div>
  </div>
</template>

<script>
import Temp from './components/Temp.vue'
import axios from 'axios'
import ajax from './utils/ajax'
<<<<<<< HEAD
import scrollDirective from './utils/scroll'
=======
import service from './utils/service';

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

>>>>>>> 4372b6be973b327ce0a6eedee803a7654733f7d8

export default {
  name: 'App',
  components: {
    Temp
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
  data() {
    return {
      show: false
    }
  },
  watch: {
    show(newValue, oldValue) {
     if(newValue !== oldValue) {
        this.visiable();
      } 
    }
  },
  directives: {
    demo: {
      inserted(){//这个名字是固定的
          console.log("加油,中国！")
      }
    },
    //指令的名字:指令的option的名字
    scroll: scrollDirective,
    focus: {
      bind: function() {
        console.log('bind====')
      },
      // 指令的定义
      inserted: function (el) {
        console.log(el)
        el.focus()
      }
    }
  },
  mounted() {
    this.getUser();
  },
  methods: {
    async getUser() {
      try {
        const response = await service('/api/user');
        console.log(response);
      } catch (error) {
        console.log(error)
      }
    },
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
}
* {
  margin: 0;
  padding: 0;
}
</style>

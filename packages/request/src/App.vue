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
import scrollDirective from './utils/scroll'

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
    const element = this.$refs.adxwrap;
    console.log('是否在可视窗口', this.isElementInViewPort(element));

    // window.onscroll = () => {
    //   // console.log('scrollTop')
    //   console.log('是否在可视窗口', this.isElementInViewPort(element));
    // }

    // this.visiable();
    setTimeout(() => {
      this.show = true;
    }, 2000)
  },
  methods: {
    focusHandler(p) {
      console.log('focusHandler', p)
    },
    onScroll(p) {
      console.log('onScroll', p)
    },
    visiable() {
      const options = {
        // root: document.querySelector('body'),
        // rootMargin: '0px',
        // threshold: 1.0,
        threshold: [0],
      }

      this.observer = new IntersectionObserver((entries) => {
        console.log('entries', entries)
      }, options);

      let target = this.$refs.adxwrap;
      this.observer.observe(target);

    },
    isElementInViewPort(element) {
      const viewHeight = window.innerHeight;  // 视口高度
      const elementTop = element.offsetTop;   // 图片到顶部的高度

      if (elementTop < viewHeight) return true;

      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;  // 窗口滚动高度

      if (elementTop < scrollTop + viewHeight) {
        return true;
      } else {
        return false;
      }
    }
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

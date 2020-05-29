<template>
  <div class="container">
    <div>
      <!-- <logo />
      <h1 class="title">
        iframe-project
      </h1>
      <h2 class="subtitle">
        Welcome to the iView + Nuxt.js template
      </h2> -->
      <div class="links">
        <Button @click="handleClick" type="primary" size="large">点我调接口</Button>
        <div id="container"></div>
        <!-- <Button type="primary" target="_blank" to="https://nuxtjs.org/">
          Documentation
        </Button>
        <Button target="_blank" to="https://github.com/nuxt/nuxt.js">
          GitHub
        </Button>
        <Button target="_blank" to="https://www.iviewui.com/">
          iView
        </Button> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo
  },
  data() {
    return {
      container: null
    }
  },
  methods: {
    async handleClick() {
      try {
        let res = await axios.get('/api/address')
        console.log('handleClick -> res', res)
      } catch (error) {
        console.log('handleClick -> error', error)
      }
    },

    // 加载iframe
    loadIframe() {
      let container = document.getElementById('container')
      container && (container.innerHTML = '')
      let iframe
      this.container = iframe = document.createElement('iframe')
      iframe.style.width = '100%'
      iframe.style.height = '400px'
      iframe.style.border = '1px solid rgb(220, 222, 226)'
      iframe.style.marginTop = '20px'
      iframe.src = '/api/address'
      document.getElementById('container').appendChild(iframe)
    }
  },
  mounted() {

  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
</style>

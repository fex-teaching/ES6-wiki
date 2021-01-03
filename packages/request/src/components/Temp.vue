<template>
  <img :src="url" alt="">
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    url: String
  }
}
</script>

<style scoped>

</style>

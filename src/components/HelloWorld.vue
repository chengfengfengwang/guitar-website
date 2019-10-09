<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <button v-on:click="$emit('update:title','new')">放大</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    title: String
  },
  data(){
    return{}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>

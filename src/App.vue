<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import Nav from "./components/Nav";
import { isPcFn } from "./assets/util.js";

export default {
  data() {
    return {
    };
  },
  components: {
    Nav
  },
  created() {
    
  },
  mounted() {
    let isPc = isPcFn();
    let msg = "用电脑体验精彩，目前暂不支持手机端";
    if (!isPc) {
      alert(msg);
      setInterval(() => {
        alert(msg);
      }, 9000);
    }
  },
  methods: {
   
  }
};
</script>

<style lang="less">
</style>

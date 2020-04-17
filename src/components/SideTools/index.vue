<template>
  <div>
    去玩儿
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "3",
      activeIndex2: "2",
      defaultActive: "/me"
    };
  },
  methods: {
    logout(){
      localStorage.clear();
      this.$router.push('/login')
    },
    handleSelect(key, keyPath) {
      //console.log(key, keyPath);
    }
  }
};
</script>
<style lang="less" scoped>
.el-menu-demo {
  padding-left: 100px;
  margin-bottom: 10px;
}
.user{
  color: #fff;
  position: absolute;
  right: 20px;
  top:20px;
}
</style>

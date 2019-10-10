<template>
  <div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="/">首页</el-menu-item>
     
      <el-menu-item index="/me">
          我的
      </el-menu-item>
      <el-menu-item index="/message">
          反馈
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "3",
      activeIndex2: "2",
      defaultActive:"/me"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      //console.log(key, keyPath);
    }
  }
};
</script>
<style lang="less" scoped>
.el-menu-demo{
    padding-left: 100px;
    margin-bottom: 10px;
}
</style>

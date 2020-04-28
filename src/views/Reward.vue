<template>
  <div class="main">
      <h2 class="title">
          在线乞讨～～
      </h2>
    <div class="get_money_pic">
      <img src="../assets/img/reward/wx.jpg" alt>
      <div class="way_text">微信</div>
    </div>
    <div class="get_money_pic get1">
      <img src="../assets/img/reward/zfb.jpg" alt>
      <div class="way_text">支付宝</div>
    </div>
  </div>
</template>
<script>
let baseUrl = "http://139.155.158.160";
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.main{
    text-align: center;
}
.title{
    margin: 40px auto;
}
.get_money_pic {
  display: inline-block;
  vertical-align: center;
  width: 200px;
  text-align: center;
  margin: 0 40px;
  .way_text {
    margin-top: 6px;
  }
  img {
    width: 100%;
  }
}
.get_money_pic.get1{
    width: 198px;
}
</style>


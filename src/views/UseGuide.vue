<template>
  <div class="main">
    <h1>使用指南</h1>
    <h2>方法一：</h2>
    <div class="step">
      <h3>1. 任意打开你找到的吉他谱网站，鼠标右键吉他谱图片=>复制图片链接</h3>
      <div>
        <img src="http://cdn.kids.immusician.com/my/static/img/1.jpg?1" alt>
      </div>
    </div>
    <div class="step">
      <h3>2. 把复制到的地址粘贴到输入框里（有几张图片就增加几个输入框，不要增加多余不用的框）</h3>
      <div>
        <img src="http://cdn.kids.immusician.com/my/static/img/2.jpg?1" alt>
      </div>
    </div>
    <div class="step">
      <h3>3. 图片地址复制粘贴完毕后，点击确定按钮</h3>
    </div>

    <!-- <div style="margin-bottom:10px">你想要说什么：</div>
    <el-input
      type="textarea"
      placeholder="请输入内容"
      rows="7"
      v-model="message"
      maxlength="100"
      show-word-limit
    ></el-input>
    <el-button style="margin-top:10px" type="primary">提交</el-button>-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: ""
    };
  }
};
</script>
<style lang="less" scoped>
.step{
    margin: 30px 0 50px 0;
}
</style>


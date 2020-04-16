<template>
  <div class="main">
      <h1>使用指南</h1>
      <h2>方法一</h2>
      <p>任意打开你找到的吉他谱网站，鼠标右键吉他谱图片=>复制图片链接</p>
    <div style="margin-bottom:10px">你想要说什么：</div>
    <el-input
      type="textarea"
      placeholder="请输入内容"
      rows="7"
      v-model="message"
      maxlength="100"
      show-word-limit
    ></el-input>
      <el-button style="margin-top:10px" type="primary">提交</el-button>

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


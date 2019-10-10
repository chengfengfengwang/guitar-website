<template>
  <div class="main">
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


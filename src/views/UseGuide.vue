<template>
  <div class="main">
    <h1>使用指南</h1>
    <h2 @click="$router.push('/')">方法一：使用线上图片</h2>
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

    <h2 @click="$router.push('/LocalFulScreen')" style="margin-top:80px;margin-bottom:60px">方法二：使用本地图片</h2>
    <div class="step">
      <h3>1. 点击选择图片按钮</h3>
      <div>
        <img src="http://cdn.kids.immusician.com/my/static/img/lstep1.png" alt>
      </div>
    </div>
    <div class="step">
      <h3>2. 多选所有曲谱文件</h3>
      <div>
        <img src="http://cdn.kids.immusician.com/my/static/img/lstep2.png" alt>
      </div>
    </div>
    <div class="step">
      <h3>3. 选择完毕后，点击确定按钮</h3>
      <div>
        <img src="http://cdn.kids.immusician.com/my/static/img/lstep3.png" alt>
      </div>
    </div>
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
h2{
  position: relative;
  left: -20px;
}
h2:hover{
  color: blueviolet;
  text-decoration: underline;
  cursor: pointer;
}
.step {
  margin: 30px 0 50px 0;
}
</style>


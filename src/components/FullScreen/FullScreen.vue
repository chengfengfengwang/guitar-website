<template>
  <!-- 全屏元素 -->
  <div @fullscreenchange="fullscreenChange" v-show="fullscreenShow"  class="fullscreen_display_wrapper">
    <div
      :class="previewList.length===1?'contain_one':''"
      v-for="(preview,index) in previewList"
      :key="index"
    >
      <img :src="preview" alt>
    </div>
    <!-- <el-button class="fullscreen_btn" type="primary" round @click="test">全屏</el-button> -->
  </div>
</template>
<script>
export default {
  props: {
    previewList: {
      default: function() {
        return [];
      }
    },
    fullscreenShow:{
        default:false
    }

  },
  data() {
    return {
    };
  },
  mounted() {
    
  },
  methods: {
    fullscreenChange() {
      document.fullscreenElement?
      this.$emit('update:fullscreenShow', true):
      this.$emit('update:fullscreenShow', false)
    }
  }
};
</script>

<style lang="less" scoped>
.fullscreen_display_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    //height: 100vh;
    width: 10px;
    //等分剩余空间
    flex-grow: 1;
    display: flex;
    align-items: center;
  }
  & > div > img {
    width: 100%;
    // 防止图片高度溢出
    max-height: 100vh;
  }
  .contain_one {
    flex-grow: 0;
    width: auto;
  }
  .contain_one > img {
    width: auto;
  }
}
</style>


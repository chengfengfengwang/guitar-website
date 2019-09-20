<template>
  <div class="about">
    <div class="main">
      <div @drop="handleDrop" id="uploadBox" class="upload_box">
        <div ref="previewWrapper" class="preview_wrapper">
          <img
            :class="'preview'+previewList.length"
            class="preview"
            v-for="(preview,index) in previewList"
            :src="preview"
            :key="index"
            alt
          />
        </div>
        <input @change="changeFile" id="myFile" type="file" name="file" multiple />

        <div class="tips" @drop="handleDrop">
          <i class="el-icon-plus"></i>
          <div>点击选择文件或者将文件拖拽至此处</div>
        </div>
      </div>
      <!-- 全屏元素 -->
      <div v-show="fullscreenShow" ref="fullscreenWrapper" class="fullscreen_display_wrapper">
        <div :class="previewList.length===1?'contain_one':''" v-for="(preview,index) in previewList" :key="index">
          <img :src="preview" alt />
        </div>
      </div>
      <div>
        <el-button class="fullscreen_btn" type="primary" round @click="toFullScreen">全屏</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      fullscreenShow: false,
      //previewList: []
      previewList: [
        "http://data.17jita.com/attachment/portal/201907/21/151525v69wyqt2xgjrjlzk.png",
        "http://data.17jita.com/attachment/portal/201907/21/151525jv11u21uwpcpcb1m.png",
        "http://data.17jita.com/attachment/portal/201907/21/151526eoc4iuhzcetitdpt.png",
      ],
    };
  },
  mounted() {
    console.log(JSON.parse(localStorage.getItem('curCollection')))
    document.querySelector("#myFile").addEventListener("dragover", e => {
      e.preventDefault();
    });
    document.querySelector("#myFile").addEventListener("drop", e => {
      e.preventDefault();
    });
    this.fullscreenWrapper = this.$refs.fullscreenWrapper;
    this.fullscreenWrapper.addEventListener("fullscreenchange", e => {
      if (document.fullscreenElement) {
        //进入全屏
        this.fullscreenShow = true;
      } else {
        this.fullscreenShow = false;
        //退出全屏
      }
    });
  },
  methods: {
    toFullScreen() {
      this.fullscreenWrapper.requestFullscreen();
    },
    changeFile(e) {
      var fileList = e.target.files;
      Array.prototype.forEach.call(fileList, e => {
        this.previewList.push(window.webkitURL.createObjectURL(e));
      });
    },
    handleDrop(e) {
      console.log(e.dataTransfer.files);
      var fileList = e.dataTransfer.files;
      //检测是否是拖拽文件到页面的操作
      if (fileList.length == 0) {
        return false;
      }
      //检测文件是不是图片
      if (fileList[0].type.indexOf("image") === -1) {
        alert("您拖的不是图片！");
        return false;
      }
      Array.prototype.forEach.call(fileList, e => {
        this.previewList.push(window.webkitURL.createObjectURL(e));
      });
    },
    handleRemove(file) {
      console.log(file);
    }
  }
};
</script>
<style lang="less">
.main {
  width: 900px;
  margin: 0 auto;
  .fullscreen_btn {
    width: 70%;
    display: block;
    margin: 20px auto 0 auto;
  }
}
.upload_box {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 300px;
  border: 1px dashed #333;
  .preview_wrapper {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;

    img.preview {
      //width: 20%;
      height: 90%;
    }
    img.preview:hover {
      opacity: 0.5;
    }
  }

  .tips {
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translateX(-50%);
    background-color: #fff;
    opacity: 0.8;
    color: #000;
    //color: #a3a7ae;
    text-align: center;
    font-size: 14px;
    .el-icon-plus {
      font-size: 30px;
    }
  }
  input {
    z-index: 9;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
  }
}
.fullscreen_display_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  &>div{
    //height: 100vh;
    width: 10px;
    //等分剩余空间
    flex-grow: 1;
    display: flex;
    align-items: center
  }
  &>div>img {
    width: 100%;
    // 防止图片高度溢出
    max-height: 100vh
  }
  .contain_one{
     flex-grow: 0;
     width: auto;
  }
  .contain_one>img{
    width: auto;
  }
}
</style>



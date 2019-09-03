<template>
  <div class="about">
    <div @drop="handleDrop" id="uploadBox" class="upload_box">
      <div class="preview_wrapper">
        <img :class="'preview'+previewList.length" class="preview" v-for="(preview,index) in previewList" :src="preview" :key="index" alt>
      </div>
      <input @change="changeFile" id="myFile" type="file" name="file" multiple>

      <div class="tips" @drop="handleDrop">
        <i class="el-icon-plus"></i>
        <div>点击选择文件或者将文件拖拽至此处</div>
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
      previewList: []
    };
  },
  mounted(){
    document.querySelector('#myFile').addEventListener('dragover',(e)=>{
      e.preventDefault()
    })
    document.querySelector('#myFile').addEventListener('drop',(e)=>{
      e.preventDefault()
    })
  },
  methods: {
    changeFile(e){
      console.log('zzz')
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
    },
    handlePictureCardPreview(file) {
      console.log("zzz");
      console.log(file);
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      console.log(file);
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      return false;
    }
  }
};
</script>
<style lang="less">
.upload_box {
  position: relative;
  display: inline-block;
  width: 700px;
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
  }

  .tips {
    position: absolute;
    left: 50%;
    top:40%;
    transform: translateX(-50%);
    background-color: #fff;
    opacity: .8;
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
</style>



<template>
  <div class="about">
    <div class="main">
      <!-- <el-button class="fullscreen_btn collect_btn" type="success" round @click="collectFormShow=true">收藏</el-button> -->
      <h1>本地图片全屏</h1>
      <div v-show="previewList.length!=0" id="uploadBox" class="upload_box">
        <div ref="previewWrapper" class="preview_wrapper">
          <img
            :class="'preview'+previewList.length"
            class="preview"
            v-for="(preview,index) in previewList"
            :src="preview"
            :key="index"
            alt
          >
        </div>
        <input @change="changeFile" accept="image/*" id="myFile" type="file" name="file" multiple>

        <!-- <div class="tips">
          <i class="el-icon-plus"></i>
          <div>点击选择文件或者将文件拖拽至此处</div>
        </div>-->
      </div>
      <div>
        <div class="choose_btn_wrapper" @click="clearSelect">
          <el-button class="clear_btn" round  type="warning">{{previewList.length!=0?'重新选择':'选择图片'}}</el-button>
          <input
            class="choose_input"
            @change="changeFile"
            id="myFile"
            type="file"
            accept="image/*"
            name="file"
            multiple
          >
        </div>

        <el-button class="fullscreen_btn" type="primary" round @click="toFullScreen">全屏</el-button>
        <div class="guide">
        <router-link style="margin-right:10px" to="/">使用线上图片？</router-link>
        <router-link to="/Useguide">不知道怎么使用？</router-link>
      </div>
      </div>
      <!-- 全屏元素 -->
      <div v-show="fullscreenShow" ref="fullscreenWrapper" class="fullscreen_display_wrapper">
        <div
          :class="previewList.length===1?'contain_one':''"
          v-for="(preview,index) in previewList"
          :key="index"
        >
          <img :src="preview" alt>
        </div>
      </div>

      <!-- 收藏对话框 -->
      <el-dialog title="我的收藏" :visible.sync="collectFormShow">
        <el-form :model="collectForm">
          <el-form-item label="名称" label-width="300">
            <el-input v-model="collectForm.name" autocomplete="off"></el-input>
          </el-form-item>
          <!-- <el-form-item label="活动区域" label-width="300">
            <el-select v-model="collectForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>-->
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="collectFormShow = false">取 消</el-button>
          <el-button type="primary" @click="submitCollection">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import InputGuitarImg from "./../components/InputGuitarImg/InputGuitarImg";
export default {
  data() {
    return {
      imgSrc: "",
      fullscreenShow: false,
      previewList: [
        // "http://data.17jita.com/attachment/portal/201907/21/151525v69wyqt2xgjrjlzk.png",
        // "http://data.17jita.com/attachment/portal/201907/21/151525jv11u21uwpcpcb1m.png",
        // "http://data.17jita.com/attachment/portal/201907/21/151526eoc4iuhzcetitdpt.png",
      ],
      collectForm: {},
      collectFormShow: false
    };
  },
  components: {
    InputGuitarImg
  },
  mounted() {
    // document.querySelector("#myFile").addEventListener("dragover", e => {
    //   e.preventDefault();
    // });
    // document.querySelector("#myFile").addEventListener("drop", e => {
    //   e.preventDefault();
    // });
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
    submitCollection() {
      this.collectForm.imgs = this.$refs.inputImg.imgArr.map(e => {
        return e.src;
      });
      var collectionList = JSON.parse(localStorage.getItem("collectionList"));
      collectionList = collectionList ? collectionList : [];
      collectionList.push(this.collectForm);
      localStorage.setItem("collectionList", JSON.stringify(collectionList));
      this.collectFormShow = false;
    },

    clearSelect() {
      this.previewList = [];
    },
    toFullScreen() {
      this.fullscreenWrapper.requestFullscreen();
    },
    changeFile(e) {
      var fileList = e.target.files;
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
  .clear_btn,
  .fullscreen_btn {
    width: 70%;
    display: block;
    margin: 20px auto 0 auto;
  }
  .fullscreen_btn {
    margin-top: 15px;
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
}
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
.choose_btn_wrapper {
  position: relative;
}
.guide {
  margin-top: 20px;
  font-size: 15px;
  text-align: center;
}
</style>



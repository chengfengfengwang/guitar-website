<template>
  <div class="main">
    <FullScreen
      ref="fullscreenWrapper"
      :fullscreenShow.sync="fullscreenShow"
      :previewList="picCollection"
    />
    <h1>我的收藏</h1>
    <!-- <el-button type="primary" round @click="myCollection">我的收藏</el-button> -->
    <div class="collection_wrapper">
      <div
        @click="goDetail(item)"
        v-for="(item,index) in collectionList"
        :key="index"
        class="collection_list"
      >{{item.name}} <i @click.stop="remove(index)" class="del_icon el-icon-delete" /></div>
    </div>
    <!-- <div class="img_wrapper">
        <div v-for="(item,index) in picCollection" :key="index" >
            <img :src="item" alt>
        </div>
    </div>-->
  </div>
</template>
<script>
import FullScreen from "./../components/FullScreen/FullScreen";
export default {
  data() {
    return {
      picCollection: [
        "http://data.17jita.com/attachment/portal/201907/21/151525v69wyqt2xgjrjlzk.png",
        "http://data.17jita.com/attachment/portal/201907/21/151525jv11u21uwpcpcb1m.png",
        "http://data.17jita.com/attachment/portal/201907/21/151526eoc4iuhzcetitdpt.png"
      ],
      collectionList: [
        {
          name: "杀死那个石家庄人",
          imgs: [
            "http://data.17jita.com/attachment/portal/201907/21/151525v69wyqt2xgjrjlzk.png",
            "http://data.17jita.com/attachment/portal/201907/21/151525jv11u21uwpcpcb1m.png",
            "http://data.17jita.com/attachment/portal/201907/21/151526eoc4iuhzcetitdpt.png"
          ]
        }
      ],
      fullscreenShow: false
    };
  },
  components: {
    FullScreen
  },
  mounted() {
    this.collectionList = JSON.parse(localStorage.getItem("collectionList"));
  },
  methods: {
    remove(index){
      this.collectionList.splice(index,1);
      localStorage.setItem('collectionList',JSON.stringify(this.collectionList))
    },
    myCollection() {
      console.log(this.picCollection);
    },
    goDetail(item) {
      this.fullscreenShow = true;
      this.picCollection = item.imgs;
      this.$nextTick(() => {
        this.$refs.fullscreenWrapper.$el.requestFullscreen()
      });
    }
  }
};
</script>
<style lang="less" scoped>
.img_wrapper {
  width: 800px;
  display: flex;
  & > div {
    width: 10px;
    flex-grow: 1;
  }
  & > div > img {
    width: 100%;
  }
}
.collection_wrapper {
  margin: 20px 0;
  padding: 0 20px;
  .del_icon{
    display: none
  }
  .collection_list:hover{
    .del_icon{
      display: inline-block;
      vertical-align: center;
    }
  }
}
</style>



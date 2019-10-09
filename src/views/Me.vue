<template>
  <div>
    <!-- <Helloworld   v-bind:title.sync="doc.title" /> -->
    <el-button type="primary" round @click="myCollection">我的收藏</el-button>
    <div class="collection_wrapper">
      <div
        @click="goDetail(item)"
        v-for="(item,index) in collectionList"
        :key="index"
        class="collection_list"
      >{{item.name}}</div>
    </div>
    <!-- <div class="img_wrapper">
        <div v-for="(item,index) in picCollection" :key="index" >
            <img :src="item" alt>
        </div>
    </div>-->
  </div>
</template>
<script>
import Helloworld from './../components/HelloWorld'
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
      postFontSize: 2,
      doc:{
        title:'tttt'
      }
    };
  },
  components:{
    Helloworld
  },
  mounted(){
    this.collectionList = JSON.parse(localStorage.getItem('collectionList'));
  },
  methods: {
    myCollection() {
      console.log(this.picCollection);
    },
    goDetail(item) {
        this.$router.push('/');
        localStorage.setItem('curCollection',JSON.stringify(item))
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
}
</style>



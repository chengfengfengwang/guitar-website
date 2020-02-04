<template>
  <div class="main">
    <h1>我的收藏ad</h1>
    <!-- <el-button type="primary" round @click="myCollection">我的收藏</el-button> -->
    <!-- <div class="collection_wrapper">
      <div
        @click="goDetail(item)"
        v-for="(item,index) in collectionList"
        :key="index"
        class="collection_list"
      >{{item.name}} <i @click.stop="remove(index)" class="del_icon el-icon-delete" /></div>
    </div> -->
  </div>
</template>
<script>
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
    };
  },
 
  mounted() {
    this.collectionList = JSON.parse(localStorage.getItem("collectionList"));
    console.log(this.collectionList)
  },
  methods: {
    collect(){
      this.axios.post(`${process.env.VUE_APP_HOST}/collect`).then(res=>{
        console.log(res)
      })
    },
    remove(index){
      this.collectionList.splice(index,1);
      localStorage.setItem('collectionList',JSON.stringify(this.collectionList))
    },
    myCollection() {
      console.log(this.picCollection);
    },
    goDetail(item) {
    
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



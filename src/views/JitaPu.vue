<template>
  <div>
    <div class="puzi puzi_title">
      <div class="author">上传者</div>
      <div class="name">名称</div>
      <div class="hit">点击量</div>
      <div class="like">喜欢数</div>
      <div class="time">上传日期</div>
    </div>
    <div @click="goDetail(item)" v-for="item in dataList" :key="item.id" class="puzi">
      <div class="author">{{item.uploader}}</div>
      <div class="name">{{item.name}}</div>
      <div class="hit">{{item.hit}}</div>
      <div class="like">{{item.like}}</div>
      <div class="time">{{item.updatedAt}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataList: []
    };
  },
  mounted() {
    this.getTablist();
  },
  methods: {
    getTablist() {
      this.axios.get(`${process.env.VUE_APP_HOST}/gtabList`).then(res => {
        console.log(res);
        if (res.error === 0) {
          this.dataList = res.data;
        }
      });
    },
    goDetail(item) {
      this.$router.push({
        path: "/jtpdetail",
        query: {
          id: item.gtab_id
        }
      });
    }
  }
};
</script>
<style lang="less">
.puzi {
  display: flex;
  margin-bottom:10px;
  &.puzi_title{
    margin-bottom: 20px;
  }
  .name {
    width: 30%;
    text-align: center;
  }
  .author {
    width: 10%;
    text-align: center;
  }
  .hit {
    width: 10%;
    text-align: center;
  }
  .like {
    width: 10%;
    text-align: center;
  }
}
</style>


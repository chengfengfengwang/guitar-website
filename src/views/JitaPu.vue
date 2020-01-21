<template>
  <div>
    <div @click="goDetail(item)" v-for="item in dataList" :key="item.id" class="puzi">
      <div class="author">{{item.uploader}}</div>
      <div class="name">{{item.name}}</div>
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
  .name {
    width: 30%;
    text-align: center;
  }
}
</style>


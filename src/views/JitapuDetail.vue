<template>
  <div class="jitapu_wrapper">
    <div @click="collect">收藏</div>
    <img v-for="img in imgList" :src="img.src" :key="img.img_order" alt>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgList: []
    };
  },
  mounted() {
    this.gtabId = this.$route.query.id;
    this.getDetailImg();
  },
  methods: {
    collect() {
      this.axios.post(`${process.env.VUE_APP_HOST}/collect`,{
          gtab_id:this.gtabId
      }).then(res => {
        if (res.error === 0) {
          //this.imgList = res.data;
        }
      });
    },
    getDetailImg() {
      this.axios
        .get(`${process.env.VUE_APP_HOST}/gtabDetail/${this.gtabId}`)
        .then(res => {
          console.log(res);
          if (res.error === 0) {
            this.imgList = res.data;
          }
        });
    }
  }
};
</script>

<style lang="less">
.jitapu_wrapper {
  width: 700px;
  margin: 0 auto;
  text-align: center;
  img {
    width: 100%;
  }
}
</style>

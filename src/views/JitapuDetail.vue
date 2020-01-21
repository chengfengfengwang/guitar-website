<template>
  <div class="jitapu_wrapper">
    <img v-for="img in imgList" :src="img.src" :key="img.img_order" alt>
  </div>
</template>
<script>
export default {
    data(){
        return{
            imgList:[]
        }
    },
  mounted() {
    console.log(this.$route.query.id);
    this.getDetailImg()
  },
  methods: {
    getDetailImg() {
        let id = this.$route.query.id;
      this.axios.get(`${process.env.VUE_APP_HOST}/gtabDetail/${id}`).then(res => {
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

<template>
  <div>
    <div v-for="(item,index) in imgArr" :key="index" class="item">
      <!-- <span class="label">图片{{index+1}}</span> -->
      <el-input style="width:700px" placeholder="输入图片地址" v-model="item.src"></el-input>
      <i @click="add(index)" class="icon el-icon-circle-plus-outline"></i>
      <i @click="remove(index)" class="icon el-icon-remove-outline"></i>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgArr: [
        {
          src: ""
        },
        
        // {
        //   src:
        //     "http://data.17jita.com/attachment/portal/201910/06/151346x261nxa9xn7xtpn1.png"
        // },
        // {
        //   src:
        //     "http://data.17jita.com/attachment/portal/201910/06/151351abxvzxvefr6ivxmv.png"
        // },
        // {
        //   src:
        //     "http://data.17jita.com/attachment/portal/201910/06/151356xeea5429r45xbk29.png"
        // }
      ]
    };
  },
  methods: {
    add(index) {
      this.imgArr.splice(index + 1, 0, {});
    },
    remove(index) {
      if(this.imgArr.length==1){
        return
      }
      this.imgArr.splice(index, 1);
    }
  }
};
</script>
<style lang="less" scoped>
.item {
  margin-bottom: 10px;
  text-align: center;
  .label {
    display: inline-block;
    width: 60px;
  }
  .icon {
    font-size: 25px;
    opacity: 0.8;
    vertical-align: middle;
    margin: 0 5px;
  }
}
</style>


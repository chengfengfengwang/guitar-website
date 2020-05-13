<template>
  <div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="/">首页</el-menu-item>
      <!-- <el-menu-item index="/jitapu">吉他谱</el-menu-item>
      <el-menu-item index="/jtpdetail">吉他谱详情</el-menu-item>
      <el-menu-item index="/me">我的</el-menu-item>-->
      <el-menu-item index="/Metronume">节拍器</el-menu-item>
      <el-menu-item index="/message">反馈</el-menu-item>
      <el-menu-item index="/reward">打赏</el-menu-item>
      <!-- <el-menu-item index="/" disabled>
        <img class="wechat" src="../assets/img/common/wechat1.png" alt>
      </el-menu-item>-->
      <div class="nav_items" @mouseenter="wxQrShow=true" @mouseleave="wxQrShow=false">
        <img class="wechat" src="../assets/img/common/wechat.png" alt>
        <div v-show="wxQrShow" class="qr_block">
          <p class="qr_block_title">微信公众号</p>
          <img
            class="wx_qr"
            src="../assets/img/common/wechat_qr.jpg"
            alt
          >
        </div>
      </div>
      <!-- <div class="nav_items" @mouseenter="wxGroupShow=true" @mouseleave="wxGroupShow=false">
        <img class="wechat" src="../assets/img/common/group.png" alt>
        <div v-show="wxGroupShow" class="qr_block wx_group">
          <p class="qr_block_title">扫描二维码回复<span class="group_key">xxx</span>入群</p>
          <img
            class="wx_qr"
            src="../assets/img/common/wechat_qr.jpg"
            alt
          >
        </div>
      </div> -->
    </el-menu>
    <!-- <div class="user">
      {{$store.getters.username}}
      <span @click="logout">退出登录</span>
    </div>-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "3",
      activeIndex2: "2",
      defaultActive: "/me",
      wxQrShow: false,
      wxGroupShow:false
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/login");
    },
    handleSelect(key, keyPath) {
      //console.log(key, keyPath);
    }
  }
};
</script>
<style lang="less" scoped>
.el-menu-demo {
  padding-left: 100px;
  margin-bottom: 10px;
}
.user {
  color: #fff;
  position: absolute;
  right: 20px;
  top: 20px;
}
.nav_items {
  position: relative;
  float: left;
  height: 3.75rem;
  margin-left: 10px;
  img.wechat {
    width: 30px;
    line-height: 4.75rem;
    margin-top: 15px;
  }
  .qr_block {
    padding: 10px 15px;
    position: absolute;
    z-index: 9;
    bottom: -185px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    background-color: #fff;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);

    .qr_block_title {
      margin-bottom: 7px;
      //margin-top: 15px;
      font-size: 13px;
    }
    img.wx_qr {
      width: 140px;
    }
  }
  .qr_block.wx_group{
    bottom: -205px;
    padding: 20px 40px;
  }
}
.group_key{
  font-weight: 700
}
</style>

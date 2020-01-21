
<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="账号">
      <el-input v-model="form.username"></el-input>
    </el-form-item>
     <el-form-item label="密码">
      <el-input v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username:'admin',
        password:'12345'
      }
    };
  },
  methods: {
    onSubmit() {
      this.axios.post(`${process.env.VUE_APP_HOST}/login`,this.form).then(res=>{
        if(res.error===0){
          console.log('---')
          console.log(res)
          const user = res.data;
          this.$store.dispatch("updateUserInfo", user);
          localStorage.setItem("userInfo", JSON.stringify(user));
          this.axios.defaults.headers.common["user_id"] = user.user_id;
          console.log('asd')
          this.$router.push('/')
        }
      })
    }
  }
};
</script>
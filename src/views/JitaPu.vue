<template>
  <div>
    <div v-for="item in dataList" :key="item.id" class="puzi">
      <div class="author">{{item.author}}</div>
      <div class="name">{{item.name}}</div>
      <div class="time">{{item.updateTime}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataList: [
        {
          id: 0,
          name: "没有理想的人不伤心",
          author: "新裤子",
          updateTime: "2020-01-08 18:19",
          like: 30,
          hit: 300
        },
        {
          id: 1,
          name: "没有理想的人不伤心",
          author: "新裤子",
          updateTime: "2020-01-08 18:19",
          like: 30,
          hit: 300
        },
        {
          id: 2,
          name: "没有理想的人不伤心",
          author: "新裤子",
          updateTime: "2020-01-08 18:19",
          like: 30,
          hit: 300
        }
      ]
    };
  }
};
</script>
<style lang="less">
.puzi{
    display: flex;
    .name{
        width: 30%;
        text-align: center;
    }
}
</style>


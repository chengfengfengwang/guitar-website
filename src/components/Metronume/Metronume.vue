<template>
  <div class="main">
    <div class="m_wrapper">
      <div class="line1">
        <div class="label">
          <span class="num">{{speed}}</span>
          <span class="text">BPM</span>
        </div>
        <div class="icon">
          <img v-show="!isPlaying" @click="start" src="../../assets/img/common/play.svg" alt>
          <img v-show="isPlaying" @click="stop" src="../../assets/img/common/pause.svg" alt>
        </div>
      </div>
      <div class="line2">
        <img class="reduce" src="../../assets/img/common/reduce.svg" @click="speed--" alt>
        <el-slider @change="mouseChange" :min="40" :max="240" class="slider" v-model="speed"></el-slider>
        <img class="add" src="../../assets/img/common/add.svg" @click="speed++" alt>
      </div>
    </div>
  </div>
</template>
<script>
import Metronume from "./Metronume.js";
export default {
  data() {
    return {
      speed: 70,
      isPlaying: false
    };
  },
  mounted() {
    this.metronume = new Metronume(this.speed);
  },
  components: {},
  methods: {
    start() {
      this.isPlaying = true;
      this.metronume.start();
    },
    stop() {
      this.isPlaying = false;
      this.metronume.stop();
    },
    reduce() {
      this.speed--;
      this.speedChange();
    },
    add() {
      this.speed++;
      this.speedChange();
    },
    speedChange() {
      if (this.isPlaying) {
        this.stop();
        this.metronume = new Metronume(this.speed);
        this.start();
      } else {
        this.metronume = new Metronume(this.speed);
      }
    },
    mouseChange() {
      this.speedChange();
    }
  },
  watch: {}
};
</script>
<style lang="less" scoped>
.m_wrapper {
  margin: 30px auto 50px auto;
  .line1 {
      margin-bottom: 20px;
    padding: 0 22px 0 6px;
    display: flex;
    justify-content: space-between;
    .num {
      color: rgba(0, 0, 0, 0.87);
      font-size: 48px;
      font-weight: 300;
      line-height: 48px;
    }
    .text {
      color: rgba(0, 0, 0, 0.54);
      display: inline-block;
      font-size: 14px;
      margin-left: 2px;
      text-transform: uppercase;
    }
    .icon {
      width: 48px;
      height: 48x;
      img {
        width: 100%;
      }
    }
  }
  .line2 {
    display: flex;
    align-items: center;
    .slider {
      margin: 0 20px 0 0;
      flex-grow: 1;
    }
    .reduce {
      width: 50px;
      position: relative;
      left: 10px;
    }
    .add {
      width: 50px;
    }
  }
}
</style>

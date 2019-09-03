<template>
  <div class="home">
    <h4 style="font-weight:normal">使用方法：点击浏览选择图片文件，按ctrl可多选，选择完毕后点击全屏</h4>
    <input id="input" type="file" multiple accept="image/*">
    <button id="btn">全屏</button>
    <div class="wrapper"></div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "home",
  mounted() {
    function openInmobile() {
      var u = navigator.userAgent;
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(u)) {
        return true;
      } else {
        return false;
      }
    }
    if (openInmobile()) {
      alert("用电脑打开体验一下！");
    }
    var wrapper = document.querySelector(".wrapper");

    var input = document.querySelector("#input");
    var imgClass;
    input.addEventListener("change", updateImageDisplay);
    function updateImageDisplay() {
      while (wrapper.firstChild) {
        wrapper.removeChild(wrapper.firstChild);
      }

      var curFiles = input.files;
      if (curFiles.length === 0) {
        var para = document.createElement("p");
        para.textContent = "No files currently selected for upload";
        wrapper.appendChild(para);
      } else {
        console.log(curFiles.length);
        if (curFiles.length == 2) {
          imgClass = "two";
        } else if (curFiles.length == 3) {
          imgClass = "three";
        }
        for (var i = 0; i < curFiles.length; i++) {
          var image = document.createElement("img");
          image.src = window.URL.createObjectURL(curFiles[i]);
          image.classList.add(imgClass);
          wrapper.appendChild(image);
        }
      }
    }
    // document.querySelector('button').addEventListener('click', function () {
    //     console.log('zzz11')
    //     if (wrapper.requestFullscreen) {
    //         console.log('zzz')
    //         wrapper.requestFullscreen()
    //     }
    // })
    //Get element id "fullscreen"
    var fullScreenButton = wrapper;

    //Activate click listener
    document.querySelector("button").addEventListener("click", function() {
      //Toggle fullscreen off, activate it
      if (
        !document.fullscreenElement &&
        !document.mozFullScreenElement &&
        !document.webkitFullscreenElement &&
        !document.msFullscreenElement
      ) {
        if (document.documentElement.requestFullscreen) {
          wrapper.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          wrapper.mozRequestFullScreen(); // Firefox
        } else if (document.documentElement.webkitRequestFullscreen) {
          wrapper.webkitRequestFullscreen(); // Chrome and Safari
        } else if (document.documentElement.msRequestFullscreen) {
          wrapper.msRequestFullscreen(); // IE
        }

        //Toggle fullscreen on, exit fullscreen
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      }
    });
  },
  components: {}
};
</script>
<style lang="less" scoped>
  
</style>

<template>
  <div class="moveBg">
    <video width="100%" height='100%' muted ref="video1" id='video1' 　autoplay>
      <source src="../assets/text_02.mp4" type="video/mp4">
    </video>
      <!-- <video id="example_video_1" class="video-js vjs-default-skin vjs-big-play-centered vjs-16-9" controls preload="none" poster="http://vjs.zencdn.net/v/oceans.png" data-setup="{}">
                    <source src="http://vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
        </video> -->

    <div class="box">
      <div @click="go" class="button"></div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'moveBg',
    data() {
      return {

      }
    },
    methods: {
      go() {
        this.$router.push({
          path: 'long'
        })

      }
    },
    mounted() {

    },


  }

</script>

<style lang='less' scoped>
  .moveBg{
    width: 100%;
    height: 100%;
  }
  video#video1 { 

  position: fixed; right: 0; bottom: 0; 
  width: 100%;
  height: 100%;

  width: auto; 

 height: auto; 

 z-index: -100; 

  // background: url(polina.jpg) no-repeat; 

  background-size: cover; }
  .box {
    width: 100%;
    height: 100%;
    // background-image: url(../assets/bg_2@3x.jpg);
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    top: 0;

    .button {
      width: 300px;
      height: 50px;
      background-image: url(../assets/btn_1@3x.png);
      background-size: 100% 100%;
      position: absolute;
      bottom: 20px;
    }
  }

</style>

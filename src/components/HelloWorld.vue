<template>
  <div>
    <!-- <img v-bind:src="imgSrc" alt=""   preload="auto">
    <div>{{this.time}}</div> -->
    <video width="100%" height='100%' muted ref="video1" id='video1' autoplay="autoplay" oncanplaythrough="myFunction">
      <source src="http://stage.tigerobo.com/images/text_01.MP4" type="video/mp4">
    </video>
  </div>
</template>


<script>
  export default {
    name: 'hell',
    data() {
      return {
        time: 0,
        imgSrc: "../../static/动画-text/dh_1_00000.png",
        all: 11
      }
    },
    methods: {

    },
    mounted() {
      var x = this.$refs.video1
      setInterval(() => {
        console.log(x.readyState)
        x.oncanplay = function () {
          console.log(1)
        }
      }, 100)


      setInterval(() => {
        if (this.time == 11) {
          this.time = 0
        } else {
          this.time++
        }
        this.imgSrc = "../../static/动画-text/dh_1_0000" + this.time + ".png"
      }, 100);


  



    },


  }


</script>

<style scoped>

</style>

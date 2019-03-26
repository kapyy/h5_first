<template >
  <div style="height:100%">
    <loader v-if='loader' @over='over'></loader>
    <video v-if='showVideo' width="100%" height='100%' muted ref="video1" id='video1' @canplaythrough="myFunction">
      <source src="../assets/text_01.mp4" type="video/mp4">
      <!-- <source src="../assets/text_02.mp4" type="video/mp4"> -->
    </video>

  </div>
</template>


<script>
	import loader from './components/loader'

  export default {
    name: 'index',
    components:{
      loader
    },
    data() {
      return {
        time: 0,
        imgSrc: "../../static/动画-text/dh_1_00000.png",
        all: 11,
        num:20,
        loader:true,
        showVideo:true,
      }
    },
    methods: {
      over(i){
        this.loader=false
        var video1 = this.$refs.video1
        video1.play()
        video1.addEventListener("ended",()=>{
          this.showVideo=false
         this.$router.push({path: 'movebg'})

        })
      },
      myFunction(){ 
        console.log('myFunction')
      },
  
    },
    mounted() {

    },


  }


</script>

<style lang='less' scoped>
  #video1{
    top:0;
    left: 0;
    position: fixed;
  }
 
</style>

<template>
  <div>
    <div class="loader">
          <div class="loader-info">
              <img  class="img" v-bind:src="imgSrc" alt=""   preload="auto">
              <div class="mum">{{this.num}}0%</div>
          </div>
       
    </div>
  </div>
</template>


<script>
  export default {
    name: 'loader',
    data() {
      return {
        time: 0,
        imgSrc: "../../../static/loading/00.png",
        all: 11,
        num:0,
        mv:1,
      }
    },
    methods: {
      
    },
    mounted() {

      this.mv=setInterval(() => {
        if (this.time == 5) {
          this.time = 0
          this.num++
      
        } else {
          this.time++
        }
        this.imgSrc = "../../../static/loading/0" + this.time + ".png"
      }, 100);
     
    },
    watch:{
        num(){
          if(this.num==10){
            clearInterval(this.mv)
            this.$emit('over','over')
          }
        }
    }
  }


</script>
<style lang="less" scoped>


  .loader {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 999;
    background-image:  url(../../assets/loading_bg.jpg);
    background-size:100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    .loader-info {
      width: 170px;
      margin-bottom: 210px;
      img{
        width: 100%;
      }
      .mum{
        color: #fff;
      }
    }

  }


</style>

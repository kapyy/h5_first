<template>
  <div class="long">
   <div class="main">
      <div class="animate">
          <div class="title">
            <img src="../assets/word-1.png" alt="">
          </div>
            <div v-show='doAnimate' class="animate-box">
                <div class="img-small img-small-left animated fadeInLeft">
                  <img src="../assets/01.jpg" alt="">
                </div>
                <div class="img-small img-small-center animated fadeInLeft">
                  <img src="../assets/02.jpg" alt="">
                </div>
                <div class="img-small img-small-right  animated fadeInRight">
                  <img src="../assets/03.jpg" alt="">
                </div>
                <div class="img-small img-small-left animated fadeInLeft">
                  <img src="../assets/04.jpg" alt="">
                </div>
                <div class="img-small img-small-center  animated fadeInLeft">
                  <img src="../assets/05.jpg" alt="">
                </div>
                <div class="img-small img-small-right   animated fadeInRight">
                  <img src="../assets/06.jpg" alt="">
                </div>
                <div class="img-big   animated fadeInLeft">
                  <img src="../assets/07.jpg" alt="">
                </div>
            </div>

      </div>
      <div>
        123123123123123123123
      </div>
   </div>
  </div>
</template>


<script>
  export default {
    name: 'long',
    data() {
      return {
        doAnimate:false
      }
    },
    methods: {
      show(){
        // this.doAnimate=!this.doAnimate
      },
      handleScroll(){
        if( document.documentElement.scrollTop >20){
              this.doAnimate=true
        }
        
      }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)

    },
  }
</script>

<style lang='less'  scoped>
  .long{
    width: 100%;
    height: 1877px; 
    background-image: url(../assets/bg-1.jpg) ;
    background-size: 100% 100%;
    position: absolute;
    top: 0;
    .main{
      margin-top:188px;
      .animate{
        .title{
          padding: 27px 0;
          img{
            width: 278px;
          }

        }
        .animate-box{
          width: 100%;
          display: flex;
          flex-direction:row;
          flex-wrap:wrap;
          align-content: flex-start;
          .animated{
            animation-duration:  0.5s
          }
          .img-small{
            // width: 33.3%;
            img{
              width: 100%;
              display:block;
              height: 100%;
              // height: 100%;
            }
          }
          .img-small-left{
            width: 32.2%;
          }
          .img-small-center{
            width: 38.6%;
          }
           .img-small-right{
            width: 29.2%;
          }
          .img-big{
            width: 100%;
            img{
              width: 100%;
            }
          }
        }
      }
    }
  }
</style>

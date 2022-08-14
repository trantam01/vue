<template>
  <div class="animated fadeIn">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://i.imgur.com/w6sLiWn.jpg">
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide
     caption="耳環"
        text="18K/750玫瑰色黃金鑲天然美鑽"
       img-src="https://i.imgur.com/I9XZpIO.jpg"></b-carousel-slide>
      <b-carousel-slide
      img-src="https://i.imgur.com/iWGbJzp.jpg">
      <h1> 鑽石</h1>
      </b-carousel-slide>  
      <b-carousel-slide img-src="https://i.imgur.com/0CTni4u.jpg">
      <h1> 完美婚嫁 </h1>
      </b-carousel-slide> 
    </b-carousel>
    <br/>
    <hr/>
    <div class="animated fadeIn">
      <h1> 系列精選
     </h1>
    <b-row>
      <b-col><b-button class="block5" size="lg" href="#/theme/Colors" variant="outline-primary"  style="color: black">高級珠寶</b-button>
      </b-col>
       <b-col><b-button class="block6" size="lg"  href="#/theme/typography" variant="outline-dark" style="color: black" >婚嫁珠寶</b-button>
      </b-col>
    </b-row>
<br/>
     <b-row>
      <b-col><b-button class="block7" size="lg"  href="#/base/breadcrumbs" variant="outline-success" style="color: black" >項鍊</b-button>
      </b-col>
       <b-col><b-button class="block8" size="lg"  href="#/base/cards" variant="outline-danger" style="color: black" >戒指</b-button>
      </b-col>
    </b-row> 
    <br/>
    <hr/>
         <h1> 推薦商品
     </h1>
    <b-row>
      <b-col> <b-button class="block5" size="lg" href="#/base/carousels" variant="outline-primary" style="color: black">手鍊</b-button>
      </b-col>
       <b-col><b-button class="block6"  size="lg"  href="#/base/collapses" variant="outline-dark" style="color: black">耳環</b-button>
      </b-col>
    </b-row>
<br/>
     <b-row>
      <b-col><b-button class="block7" size="lg"  href="#/base/jumbotrons" variant="outline-success" style="color: black">手鏈/腳鏈</b-button>
      </b-col>
       <b-col><b-button class="block8" size="lg"  href="#/base/list-groups" variant="outline-danger" style="color: black">串飾</b-button>
      </b-col>
    </b-row>
    </div>
<br/>
<hr/>
<div class="buttonall">
  <h1>品牌介紹 </h1>
  <br/>
  
<a><img src="https://i.imgur.com/4IMIYmt.jpg" /> </a> 
<br/>
<br/>
  <p >周大福「迪士尼經典系列」多款備受喜愛的米奇和米妮造型精品首飾，帶領大家走進迪士尼的奇幻國度，讓你感受他們的幸福與夢幻!<br />
為慶祝米奇90周年，周大福特別推出一系列以不同年代的米奇造型為主題的迪士尼「米奇90周年」系列足金、純銀、18K金及美鑽期間限定首飾，重溫及細味歷年來米奇不同風格的可愛造型。
<br/>
<br/>
<b-button size="lg" href="#/base/forms" squared variant="outline-danger" style="color: black">更多</b-button>

   
  </p>

</div>

    
     <div class="animated fadeIn">

  <hr/>
     <p>
      關注我們
      <b-row>
      <b-col>
                   <a target="_blank" rel="noopener" href="https://twitter.com/ypcloud"
                       class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Follow us">
                        <i class="fa fa-twitter"></i>
                    </a>
          
                    <a target="_blank" rel="noopener" href="https://www.facebook.com/ypcloud/"
                       class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Like us">
                        <i class="fa fa-facebook-square"></i>
                    </a>
             
                    <a target="_blank" rel="noopener" href="https://www.instagram.com/"
                       class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="instagram">
                        <i class="fa fa-instagram"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://www.youtube.com/channel/UC9RnnCAipnQ9Uew-qHpEOvQ/videos"
                       class="btn btn-neutral btn-icon-only btn-dribbble btn-lg btn-round" data-toggle="tooltip"
                       data-original-title="Follow us">
                        <i class="fa fa-youtube"></i>
                    </a>
                      <a target="_blank" rel="noopener" href="https://shopee.tw/vacanzaaccessory"
                       data-toggle="tooltip"
                       class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg"
                       data-original-title="shoppe">
                       <img height="20px" width="20px" src="https://i.imgur.com/Z5kuclM.png" />
                    </a>  
                     
        </b-col>            
      </b-row>
     </p>
     

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>
<style scoped>
#carousel-1{
 width: 100vw;
 position: relative;
 margin-left: -50vw;
 left: 50%
}


.buttonall{
  width: 100vw;
  position: relative;
  margin-left: -50vw;
  left: 50%;
  /* background-image: 
                  url("https://i.imgur.com/4IMIYmt.jpg"); */
}
.block {
  
  width: 110px;
  height: 80px;
  border: none;
  background-image: 
                  url("https://i.imgur.com/KqLoFsl.jpg");
  padding: 10px 20px;
  font-size: 15px;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  
 
}
.block2 {
  
   width: 110px;
  height: 80px;
  border: none;
  background-image: linear-gradient(rgba(255, 0, 0, 0.5), rgba(255, 255, 0, 0.5)),
                  url("https://i.imgur.com/IYOBJUG.jpg");
  padding: 10px 20px;
  font-size: 15px;
  cursor: pointer;
  text-align: center;
   font-weight: bold;
  
    
}
.block3 {
  
   width: 110px;
  height: 80px;
  border: none;
  background-image: linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)),
                  url("https://i.imgur.com/CfRCOza.jpg");
  padding: 10px 20px;
  font-size: 10px;
  cursor: pointer;
  text-align: center;
   font-weight: bold;
  
  
}
.block4 {

   width: 110px;
  height: 80px;
  border: none;
  background-image: linear-gradient(rgba(0, 255, 0, 0.384), rgba(204, 0, 255, 0.5)),
                  url("https://i.imgur.com/lby5sZz.jpg");
  padding: 10px 20px;
  font-size: 15px;
  cursor: pointer;
  text-align: center;
   font-weight: bold;
     
}
.block5 {
  
  width: 150px;
  height: 100px;
  border: none;
  background-image: 
                  url("https://i.imgur.com/KqLoFsl.jpg");
  padding: 35px 45px;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  
}
.block6 {
  
  width: 150px;
  height: 100px;
  border: none;
  background-image: linear-gradient(rgba(255, 0, 0, 0.5), rgba(255, 255, 0, 0.5)),
                  url("https://i.imgur.com/IYOBJUG.jpg");
  padding: 35px 45px;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  
}
.block7 {
  
  width: 150px;
  height: 100px;
  border: none;
  background-image: linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)),
                  url("https://i.imgur.com/CfRCOza.jpg");
  padding: 35px 45px;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  
}
.block8 {
  
  width: 150px;
  height: 100px;
  border: none;
  background-image: linear-gradient(rgba(0, 255, 0, 0.384), rgba(204, 0, 255, 0.5)),
                  url("https://i.imgur.com/lby5sZz.jpg");
  padding: 35px 45px;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  
}
div{
  text-align: center;
}
p{
  text-align: center;
  font-weight: bold;
  font-size: 20px;
}
h1{
  text-align: center;
}

#menu ul
{
  margin-top:  12px;
}
#menu ul li
{
  list-style-type: none;
  display: inline;
  margin-left: 30px;
}
#menu img
{
  height: 40px;
}
#menu ul li a:link 
{
   color: #FFF;
   text-decoration: none;
   text-transform: uppercase;
   padding-top: 60px;
   padding-bottom: 60px;
   padding-left: 40px;
   padding-right: 40px;
}
              
#menu ul li a:visited
{
   color: #FFF;
   text-decoration: none;
   text-transform: uppercase;
}
              
#menu ul li a:hover
{
   color: #FFF;
   background-color: gray;
   -webkit-box-shadow: 0px 4px 5px rgba(50, 50, 50, 0.93);
   -moz-box-shadow:    0px 4px 5px rgba(50, 50, 50, 0.93);
   box-shadow:         0px 4px 5px rgba(50, 50, 50, 0.93);
}
</style>
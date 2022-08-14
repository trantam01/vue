<template>


  <div class="app flex-row align-items-center-left animated fadeIn">
    <b-card no-body class="overflow-hidden" >
    <b-row no-gutters>
      <b-col md="6">
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
      <!-- Text slides with image -->
      <b-carousel-slide
        caption=""
        text=""
        img-src="https://i.imgur.com/QsH8Gye.jpg"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://i.imgur.com/w6sLiWn.jpg">
        <h1></h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://i.imgur.com/ynZJpbJ.jpg"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="https://i.imgur.com/iWGbJzp.jpg"
          alt="image slot"
        >
      </b-carousel-slide>
    </b-carousel>
      </b-col>
      <b-col md="6">
        <b-card-body title="DB Classic 黃金圓形密釘鑲彩鑽戒指">
          <b-card-header>
            <span class="" style="font-weight: 700; color: rgb(183, 183, 183); text-decoration: line-through;">
                 NT$6,100,000
                </span>
             NT$6,050,000
          </b-card-header>
          <b-card-text>
           在這款18K玫瑰金訂婚鑽戒中，一系列包鑲鑽石垂懸於戒指間的圓柱上，
           包圍著中央開放式籃式鑲嵌的圓形明亮式切割主鑽。外圈戒指逐漸收窄，鑲嵌著精緻的密釘鑲鑽。
            指間閃耀著無與倫比的璀然亮光，寓意邁入婚姻殿堂後無限光明的嶄新篇章。
            每顆鑽石皆以遵循道德章程的方式採購，由De Beers的鑽石專家團隊以超過130年的專業經驗逐一精心甄選，並手工鑲嵌。 
            您也可以透過我們的訂製服務For You, Forever打造專屬的訂婚鑽戒。誠邀您親自挑選心儀的鑽石與鑲嵌方式，
            讓De Beers專業工匠團隊為您量身訂製獨一無二的專屬作品
          </b-card-text>
        </b-card-body>
      </b-col>
      <br/>
       <br/>
        <br/>
         <br/>   
       
     <p>
       
         <a target="_blank" rel="noopener" href="https://shopee.tw/vacanzaaccessory"
                       data-toggle="tooltip"
                       data-original-title="instagram">
                       <img height="50px" width="50px" src="https://i.imgur.com/ABl6H23.jpg" />
                    </a>   
       
         分享:
      
                    <a target="_blank" rel="noopener" href="https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fpublish.twitter.com%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Eshare%7Ctwgr%5E&text=Twitter%20Publish&url=https%3A%2F%2Fapps.ypcloud.com%2Fpage%2Fgotentam01%2Fpage-DeShop%2F%23%2Ftheme%2Finfo&amp;src=sdkpreparse"
                       class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Follow us">
                        <i class="fa fa-twitter"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fapps.ypcloud.com%2Fpage%2Fgotentam01%2Fpage-DeShop%2F%23%2Ftheme%2Finfo&amp;src=sdkpreparse"
                       class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Like us">
                        <i class="fa fa-facebook-square"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://social-plugins.line.me/lineit/share?url=https%3A%2F%2Fapps.ypcloud.com%2Fpage%2Fgotentam01%2Fpage-DeShop%2F%23%2Ftheme%2Finfo&amp;src=sdkpreparse"
                       class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="line">
                        <img height="20px" width="20px" src="https://i.imgur.com/SYt02LJ.png" />
                    </a>
                   
      
     </p>
    </b-row>
  </b-card>
  </div>
  
</template>

<script>
export default {
  name: 'Login'
}
</script>
<style scoped>
p{
  font-weight: bold;
  font-size: 20px;
}
</style>

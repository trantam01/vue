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
        img-src="https://i.imgur.com/yG1yq4g.jpg"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://i.imgur.com/w6sLiWn.jpg">
        <h1></h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://i.imgur.com/iWGbJzp.jpg"></b-carousel-slide>
    </b-carousel>
      </b-col>
      <b-col md="6">
        <b-card-body title="Enchanted Lotus 白金項鍊">
          <b-card-header> NT$3,500,000
          </b-card-header>
          <b-card-text>
            此款優雅的結婚戒指寬5公釐，數條鉑金線條相互交融形成簡潔的錯落脊狀線條。
            一顆以遵循道德章程的方式採購的圓形明亮式鑽石暗鑲於戒指內側，只有佩戴者知曉。極具現代風尚又經典雋永，此款戒指是見證愛侶共諧連理的大膽作品。
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
      
                    <a target="_blank" rel="noopener" href="https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fpublish.twitter.com%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Eshare%7Ctwgr%5E&text=Twitter%20Publish&url=https%3A%2F%2Fapps.ypcloud.com%2Fpage%2Fgotentam01%2Fpage-DeShop%2F%23%2Ftheme%2Fproduct0-3&amp;src=sdkpreparse"
                       class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Follow us">
                        <i class="fa fa-twitter"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fapps.ypcloud.com%2Fpage%2Fgotentam01%2Fpage-DeShop%2F%23%2Ftheme%2Fproduct0-3&amp;src=sdkpreparse"
                       class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Like us">
                        <i class="fa fa-facebook-square"></i>
                    </a>
                     <a target="_blank" rel="noopener" href="https://social-plugins.line.me/lineit/share?url=https%3A%2F%2Fapps.ypcloud.com%2Fpage%2Fgotentam01%2Fpage-DeShop%2F%23%2Ftheme%2Fproduct0-3&amp;src=sdkpreparse"
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

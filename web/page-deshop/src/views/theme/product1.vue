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
        img-src="https://i.imgur.com/amRJyz0.jpg"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://i.imgur.com/amRJyz0.jpg">
        <h1></h1>
      </b-carousel-slide>


    
    </b-carousel>
      </b-col>
      <b-col md="6">
        <b-card-body title="DB Classic 鉑金單鑽戒指">
            <b-card-header>
              <span class="" style="font-weight: 700; color: rgb(183, 183, 183); text-decoration: line-through;">
                 NT$45,000 </span>
               NT$43,000 <br/>
              根據石頭的重量和質量，指示性的最低價格
          </b-card-header>
          <b-card-text>
            DB Classic高級珠寶項鍊是此次展覽最高價的作品，長梯形鑽石構成的項鍊外側，圍繞著兩排可拆卸式的 彩色鑽石原石，搭配一顆5克拉的梨形鑽石吊墜。
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
      
                    <a target="_blank" rel="noopener" href="https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fpublish.twitter.com%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Eshare%7Ctwgr%5E&text=Twitter%20Publish&url=https%3A%2F%2Fapps.ypcloud.com%2Fpage%2Fgotentam01%2Fpage-DeShop%2F%23%2Ftheme%2Fproduct1&amp;src=sdkpreparse"
                       class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Follow us">
                        <i class="fa fa-twitter"></i>
                    </a>
                   <a target="_blank" rel="noopener" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fapps.ypcloud.com%2Fpage%2Fgotentam01%2Fpage-DeShop%2F%23%2Ftheme%2Fproduct1&amp;src=sdkpreparse"
                       class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Like us">
                        <i class="fa fa-facebook-square"></i>
                    </a>
                     <a target="_blank" rel="noopener" href="https://social-plugins.line.me/lineit/share?url=https%3A%2F%2Fapps.ypcloud.com%2Fpage%2Fgotentam01%2Fpage-DeShop%2F%23%2Ftheme%2Fproduct1&amp;src=sdkpreparse"
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

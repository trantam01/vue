<template>
  <div class="forms">
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
      <b-carousel-slide
      img-src="https://i.imgur.com/NZ2nBA4.jpg?2">
      <h1> DE shop</h1>
      </b-carousel-slide>  
      <b-carousel-slide
      img-src="https://i.imgur.com/inTelH3.jpg?1">
      <h1></h1>
      </b-carousel-slide> 
     
    </b-carousel>
       
       <b-row>
         
      <b-col> <h1>始於1780年的巴黎珠寶品牌</h1> </b-col>
      <b-col> <h1><img height="200px" alt="tree" src="https://i.imgur.com/NZ2nBA4.jpg" /></h1> </b-col>
       </b-row>
      <h2>自1780年在巴黎創建立開始，Jujue的品牌故事就和法國的歷史緊密相連，並很快成爲約瑟芬皇后的皇家御用珠寶品牌。</h2>
      <br/>
    <b-row>
       <b-col> <h1><img height="200px" alt="tree" src="https://i.imgur.com/bPMBqa2.jpg" /></h1> </b-col>  
      <b-col> <h1>多年來累積的精湛工藝、深厚傳統以及承諾</h1> </b-col>
      
       </b-row>

    <br/>
      <br/>
        <br/>
          <br/>
          <br/>
      <br/>
        <br/>
          <br/>
          <br/>
      <br/>
        <br/>
          <br/>

 
  </div>
</template>

<script>
export default {
  name: "forms",
};
</script>

<style scoped>
p{
  text-align: center;
  height: 250px;
}
.forms {
   background-image: url("https://i.imgur.com/8A8tPHY.jpg");
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  text-align: center;
  margin: 0 10px;
}
li h3:hover { /* when the mouse moves */
    background-color: wheat; 
}
h3 {
  margin: 40px 0 0;
}
</style>

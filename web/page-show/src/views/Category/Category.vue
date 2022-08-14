<template>
  <div>
  <p>展覽資訊</p>
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
<br/>
<br/>
<br/>
<br/>
  </div>
</template>

<script>
  export default {
    name: "Category",
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
div{
    background-image:url("https://i.imgur.com/Zk6duVb.jpg");
    width: 100%;
    height: 100%;  
    margin: 0;
     padding: 10px 20px;
    background-size:100% 100%;
}
p{
  font-size: 30px;
  text-align: center;
}
</style>>

<template>
  <div class="not-found-container">
     
   <div class="rtlink">
   
     <div id="big-circle" class="circle big">
        <h1>
       亮點展區
        </h1>
       <router-link class="circle one" :to="{name : 'huangjin'}">黃金</router-link>
        <router-link class="circle two" :to="{name : 'xianglian'}">項鍊</router-link>
       
          <router-link class="circle three" :to="{name : 'erhuan'}">耳環</router-link>
           <router-link class="circle four" :to="{name : 'shoulian'}">手鍊</router-link>
            <router-link class="circle six" :to="{name : 'Homeb1'}">鑽石</router-link>
           </div>
        
    </div>
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
   name: "PageNotFound"
}
</script>

<style scoped>
#big-circle{
    display: flex;
  justify-content: center;
  align-items: center;
}
.circle {
    border-radius: 50%;
    width: 90px;
    height: 90px;
    position: absolute;
   display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: bold;
}

.circle.big {
    width: 190px;
    height: 190px;
    /* background-image: 
                  url("https://i.imgur.com/NSujstt.jpg") ; */
    margin: 100px;
    display: flex;
  justify-content: center;
  align-items: center;
}

.one {
    left: -90px;
    top: -10px;
    background-image: 
                  url("https://i.imgur.com/0kX9vRL.jpg") ;
                  background-size: cover;
  background-position: center;  
  /* background-color: #d1ffff; */
  font-size: 25px;
  color: gold;
  cursor: pointer;
  font-weight: bold;
    
}

.two {
    top: -80px;
    left: 50px;
    background-image: 
                  url("https://i.imgur.com/WKXzjZR.jpg") ;
                 
                    background-size: cover;
  background-position: center;
  font-size: 25px;
  color: rgb(68, 255, 0);
  cursor: pointer;
  font-weight: bold;
}

.three {
    right: -90px;
    top: -10px;
    background-image: 
                  url("https://i.imgur.com/gMBw4xP.jpg") ;
                 
                  background-size: cover;
  background-position: center;
  font-size: 25px;
  color: rgb(240, 154, 15);
  cursor: pointer;
  font-weight: bold;
}

.four {
    left: -50px;
    bottom: -40px;
    background-image: 
                  url("https://i.imgur.com/W06rWO9.jpg") ;
                     background-size: cover;
  background-position: center;
                 
  font-size: 25px;
  color: rgb(16, 189, 232);
  cursor: pointer;
  font-weight: bold;
}

.five {
    bottom: -40px;
    left: 50px;
    background-image: 
                  url("https://i.imgur.com/NSujstt.jpg") ;
                
  font-size: 25px;
  color: rgb(123, 56, 136);
  cursor: pointer;
  font-weight: bold;
}

.six {
    right: -40px;
    bottom: -40px;
    background-image: 
                  url("https://i.imgur.com/rnxURGY.jpg") ;
                  background-size: cover;
  background-position: center;
  font-size: 25px;
  color: rgb(57, 138, 148);
  cursor: pointer;
  font-weight: bold;
}




.ulli{
    text-align: center;
}
.rtlink{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: bold;
}
.not-found-container{
  background-image:url("https://i.imgur.com/T4FWXqT.jpg");
    width: 100%;
    height: 100%;  
    margin: 0;
    padding: 10px 20px;
    background-size:100% 100%;
    display: flex;
    justify-content: center;
     align-items: center;
    
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  font-size: 50px;
  margin: 0 10px;
  font-weight: bold;
   
}
.block1 {
  
  clip-path: circle(50%);
  height: 4em;
  width: 4em;
  background-image: 
                  url("https://i.imgur.com/NSujstt.jpg") ;
  padding: 25px 25px;
  font-size: 25px;
  color: gold;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  position:absolute;
  left:490px;top:230px;
  
}
.block2 {
  
  clip-path: circle(50%);
  height: 4em;
  width: 4em;
  background-image: 
                  url("https://i.imgur.com/NSujstt.jpg") ;
  padding: 25px 25px;
  font-size: 25px;
  color: rgb(172, 200, 140);
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  position:absolute;
  left:490px;top:480px
  
}
.block3 {
  
  clip-path: circle(50%);
  height: 4em;
  width: 4em;
  background-image: 
                  url("https://i.imgur.com/NSujstt.jpg") ;
  padding: 25px 25px;
  font-size: 25px;
  color: rgb(114, 206, 28);
  cursor: pointer;
  text-align: center;
  font-weight: bold;
   position:absolute;
  right:490px;top:230px;
  
}
.block4 {
  
  clip-path: circle(50%);
  height: 4em;
  width: 4em;
  background-image: 
                  url("https://i.imgur.com/NSujstt.jpg") ;
  padding: 25px 25px;
  font-size: 25px;
  color: rgb(206, 103, 24);
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  position:absolute;
  right:490px;top:480px;
  
}
.downbt {
  
  width: 100px;
  height: 80px;
  border: none;
  background-color: rgba(144, 97, 12, 0.974);
  padding: 15px 25px;
  font-size: 30px;
  cursor: pointer;
  color: aliceblue;
  text-align: center;
  font-weight: bold;
  
 
}
.not-found{
    text-align: center;
}
.not-found h2{
    font-size: 150px;
    margin-top: 30px;
}
.not-found h3{
    font-size: 50px;
}
h1{
  /* display: flex;
  justify-content: center;
  align-items: center; */
  font-size: 40px;
  font-weight: bold;
  color: #d1ffff;
}
</style>

<template>
  <footer>
    <div class="container pt-5">
       <br/>
        <br/> 
         <br/> 
    </div>
  </footer>
</template>

<script>
export default {
  name : "Footer",
  data(){
    return{
     searchModalVisible: false,
     }
  }
}
</script>

<style scoped>
.downbt {
  
  width:100%;
max-height:100%;

  border: none;
   display: inline-block;
  /* background-color: rgba(144, 97, 12, 0.974); */
  padding: 15px 25px;
  font-size: 20px;
  cursor: pointer;
  color: aliceblue;
  text-align: center;
  
 
}
.ulli{
    text-align: center;
    display: inline-block;
}
footer {
  margin-top : 100px;
  background-color:#232F3E;
  font-size:16px;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  font-size: 30px;
  margin: 0 10px;
  font-weight: bold;
   
}

a {
  text-decoration: none;
}

.footer-link {
  color: #DDD;
}

#logo {
  width: 120px;
  height: 50px;
}

footer {
  font-family: 'Roboto', sans-serif;
}

img{
  width: 50px;
  height: 50px;
}
</style>

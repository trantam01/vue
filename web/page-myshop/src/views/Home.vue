<template>
  <div class="not-found-container">
     <div class="ulli">
          <form>
   <ul> <img src:previewImage class="uploading-image" />Shop name
        <input id="About" type="text" v-model="email" />&nbsp; &nbsp;
      <input type="file" accept="image/png" @change=uploadImage>
      
      </ul>
      <ul> <img src:previewImage class="uploading-image" />Homepage Banner Images <br/>
      <input type="file" accept="image/jpeg" @change=uploadImage></ul>
    <ul> <label for="email">Product type/categories</label><br/>
    <input id="type" type="text" v-model="email" /></ul>
    <ul> <label>About us/Brand story&nbsp;&nbsp;&nbsp;&nbsp;</label><br/>
    <input type="file" accept="image/png" @change=uploadImage></ul>
  <ul> <label>Store Details</label> <br/>
  <input id="Social-Link" type="url" v-model="link"  placeholder="Hours" /> <br/>
  <input id="Social-Link" type="url" v-model="link"  placeholder="Location" /> <br/>
     </ul>

     <ul> <label>Contact Details</label> <br/>
  <input id="Social-Link" type="url" v-model="link"  placeholder="Phone Numbers" /> <br/>
  <input id="Social-Link" type="url" v-model="link"  placeholder="Email" /> <br/>
     </ul>
     <ul> <label>Social Links</label> <br/>
  <input id="Social-Link" type="url" v-model="link"  placeholder="FaceBook" /> <br/>
  <input id="Social-Link" type="url" v-model="link"  placeholder="Instagram" /> <br/>
  <input id="Social-Link" type="url" v-model="link"  placeholder="Twitter" /> <br/>
  <input id="Social-Link" type="url" v-model="link"  placeholder="Line" />
     </ul>
    <ul> <label>Other Links</label> <br/>
  <input id="Social-Link" type="url" v-model="link"  placeholder="EC" /> <br/>
  <input id="Social-Link" type="url" v-model="link"  placeholder="Official Website" /> <br/>
     </ul>

         </form>
        
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
   name: "Home",
   data(){
            return{
               previewImage:null
            }
        },
        methods:{
            uploadImage(e){
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e =>{
                    this.previewImage = e.target.result;
                    console.log(this.previewImage);
                };
            }
        }
     } 

</script>

<style scoped>
.uploading-image{
     display:flex;
   }
.ulli{
     text-align: left;
  
  font-size: 50px;
  font-weight: bold;
}
.not-found-container{
  background-color:#283b38;
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
    font-size: 30px;
  /* margin: 0 10px; */
  font-weight: bold;
  color:white
}
li {
  display: inline-block;
  font-size: 30px;
  /* margin: 0 10px; */
  font-weight: bold;
  color:white
   
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

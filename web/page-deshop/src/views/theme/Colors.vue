<template>
  <div class="animated fadeIn">
    <p1>高級珠寶</p1><br/><br/>
    <b-row>
      <b-col>
        
        <b-card>
          
          <div slot="footer">
            <span class="" style="font-weight: 700; color: rgb(183, 183, 183); text-decoration: line-through;">
                  NT$2,800,000
                </span>
            
            NT$2,680,000
            
   <!-- <b-badge v-b-modal.modal-1 variant="success" class="float-right " href="#"  >加入最愛</b-badge> -->
     <b-button style="width: 90px;height: 30px;background-color:pink" class="float-right " :disabled="this.count == 0" @click="submit">
                  <span style="font-weight: 600">
                    加入最愛
                  </span>
                </b-button>
   <!-- <b-modal id="modal-1" title="Checkout" >
    <p class="my-4">Select Quantity and size</p>
 <b-container fluid>
        <b-row class="mb-1 text-center">
          <b-col cols="3"></b-col>
          <b-col>Size</b-col>
          <b-col>Quantity</b-col>
        </b-row>

        <b-row class="mb-1">
          <b-col cols="3">Select</b-col>
          
          <b-col>
            <b-form-select
              v-model="headerBgVariant"
              :options="variants"
            ></b-form-select>
          </b-col>
          <b-col>
            <b-form-select
              v-model="headerTextVariant"
              :options="options"
            ></b-form-select>
          </b-col>
        </b-row>
      </b-container>
       <div slot="modal-footer" class="w-100" >
        <b-button  class="btn btn-success float-right mx-3" style="width: 100px;"
         >Buy Now 
        </b-button>
 
        <b-button class="float-right btn btn-dark " style="width: 100px;">
         加入最愛
        </b-button>     
      </div>   
  </b-modal> -->
          

                      
          </div>
      <router-link to="/theme/product">
          <b-img src="https://i.imgur.com/fpFfylc.jpg" fluid alt="Responsive image" class="rounded mx-auto d-block"  height = "60" width="120" ></b-img></router-link><br/>Landers Radiance 將鑽石原石</b-card>
       
      </b-col>
       <b-col>
        <b-card>
          <div slot="footer">
             <span class="" style="font-weight: 700; color: rgb(183, 183, 183); text-decoration: line-through;">
                   NT$6,100,000
                </span>

              NT$6,050,000
              
               <b-button style="width: 90px;height: 30px;background-color:pink" class="float-right " :disabled="this.count == 0" @click="submit">
                  <span style="font-weight: 600">
                    加入最愛
                  </span>
                </b-button>
          </div>
           <router-link to="/theme/info">
            <b-img src="https://i.imgur.com/QsH8Gye.jpg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img></router-link><br/>
          DB Classic 彩鑽戒指</b-card>
      </b-col>
    </b-row>
    <b-row>
       <b-col >
        <b-card>
          <div slot="footer">
            NT$1,250,000
              <b-button style="width: 90px;height: 30px;background-color:pink" class="float-right " :disabled="this.count == 0" @click="submit">
                  <span style="font-weight: 600">
                    加入最愛
                  </span>
                </b-button>
          </div>
           <router-link to="/theme/product01">
          <b-img src="
      https://i.imgur.com/erxoyck.jpg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img></router-link><br/>
         Atomique指間戒</b-card>
      </b-col>
       <b-col >
        <b-card>
          <div slot="footer">
            NT$1,780,000
              <b-button style="width: 90px;height: 30px;background-color:pink" class="float-right " :disabled="this.count == 0" @click="submit">
                  <span style="font-weight: 600">
                    加入最愛
                  </span>
                </b-button>
          </div>
           <router-link to="/theme/product02">
          <b-img src="
      https://i.imgur.com/lBBAVyx.jpg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img></router-link><br/>
          Light Rays雞尾酒戒指</b-card>
      </b-col>
    </b-row>
    <b-row>
       <b-col>
        <b-card>
          <div slot="footer">
          NT$3,500,000
              <b-button style="width: 90px;height: 30px;background-color:pink" class="float-right " :disabled="this.count == 0" @click="submit">
                  <span style="font-weight: 600">
                    加入最愛
                  </span>
                </b-button>
          </div>
          <router-link to="/theme/product03">
          <b-img src="
      https://i.imgur.com/yG1yq4g.jpg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img></router-link><br/>
          Enchanted Lotus 白金項鍊</b-card>
      </b-col>
       <b-col >
        <b-card>
          <div slot="footer">
            NT$3,550,000 
              <b-button style="width: 90px;height: 30px;background-color:pink" class="float-right " :disabled="this.count == 0" @click="submit">
                  <span style="font-weight: 600">
                    加入最愛
                  </span>
                </b-button>
          </div>
          <router-link to="/theme/product04">
            <b-img src="
      https://i.imgur.com/2hsdzwU.jpg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img></router-link><br/>
          Atomique 領片項鍊</b-card>
      </b-col>
    </b-row>
    <b-row>
       <b-col >
        <b-card>
          <div slot="footer">
            NT$3,850,000 
              <b-button style="width: 90px;height: 30px;background-color:pink" class="float-right " :disabled="this.count == 0" @click="submit">
                  <span style="font-weight: 600">
                    加入最愛
                  </span>
                </b-button>
          </div>
          <router-link to="/theme/product05">
          <b-img src="
      https://i.imgur.com/W06rWO9.jpg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img></router-link><br/>
          Atomique 項鍊 </b-card>
      </b-col>
       <b-col >
        <b-card>
          <div slot="footer">
      
            NT$4,250,000 
              <b-button style="width: 90px;height: 30px;background-color:pink" class="float-right " :disabled="this.count == 0" @click="submit">
                  <span style="font-weight: 600">
                    加入最愛
                  </span>
                </b-button>
          </div>
          <router-link to="/theme/info">
          <b-img src="
      https://i.imgur.com/4l09x7C.jpg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img></router-link><br/>
         Flourishing Lotus項鍊</b-card>
      </b-col>
    </b-row>
      <b-row>
       <b-col>
        <b-card>
          <div slot="footer">
           NT$2,250,000 
              <b-button style="width: 90px;height: 30px;background-color:pink" class="float-right " :disabled="this.count == 0" @click="submit">
                  <span style="font-weight: 600">
                    加入最愛
                  </span>
                </b-button>
          </div>
            <router-link to="/theme/info">
          <b-img src="
      https://i.imgur.com/ORScf1D.jpg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img></router-link><br/>
          Atomique圈形耳環</b-card>
      </b-col>
       <b-col >
        <b-card>
          <div slot="footer">
            NT$5,500,000  
              <b-button style="width: 90px;height: 30px;background-color:pink" class="float-right " :disabled="this.count == 0" @click="submit">
                  <span style="font-weight: 600">
                    加入最愛
                  </span>
                </b-button>
          </div>
            <router-link to="/theme/info">
            <b-img src="
      https://i.imgur.com/tnCmF7J.jpg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img></router-link><br/>
          Atomique 耳釘</b-card>
      </b-col>
      </b-row>
      <b-row>
       <b-col>
        <b-card>
          <div slot="footer">
            NT$4,700,000 
             <b-button style="width: 90px;height: 30px;background-color:pink" class="float-right " :disabled="this.count == 0" @click="submit">
                  <span style="font-weight: 600">
                    加入最愛
                  </span>
                </b-button>
          </div>
            <router-link to="/theme/info">
          <b-img src="
      https://i.imgur.com/etftuoK.jpg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img></router-link><br/>
          Light Rays垂墜式吊燈耳環</b-card>
      </b-col>
       <b-col>
        <b-card>
          <div slot="footer">
          NT$4,850,000 
             <b-button style="width: 90px;height: 30px;background-color:pink" class="float-right " :disabled="this.count == 0" @click="submit">
                  <span style="font-weight: 600">
                    加入最愛
                  </span>
                </b-button>
          </div>
           <router-link to="/theme/info">
          <b-img src="
      https://i.imgur.com/mCKx2yp.jpg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img></router-link><br/>
          Talisman高級珠寶黃金和鉑金耳環</b-card>
      </b-col>  
    </b-row>

    <b-row>
    <b-col><b-card>
          <div slot="footer">
          NT$4,850,000 
              <b-button style="width: 90px;height: 30px;background-color:pink" class="float-right " :disabled="this.count == 0" @click="submit">
                  <span style="font-weight: 600">
                    加入最愛
                  </span>
                </b-button>
          </div>
           <router-link to="/theme/info">
          <b-img src="
      https://i.imgur.com/mCKx2yp.jpg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img></router-link><br/>
          Talisman高級珠寶黃金和鉑金耳環</b-card></b-col>
    <b-col><b-card>
          <div slot="footer">
          NT$4,850,000 
             <b-button style="width: 90px;height: 30px;background-color:pink" class="float-right " :disabled="this.count == 0" @click="submit">
                  <span style="font-weight: 600">
                    加入最愛
                  </span>
                </b-button>
          </div>
           <router-link to="/theme/info">
          <b-img src="
      https://i.imgur.com/mCKx2yp.jpg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img></router-link><br/>
          Talisman高級珠寶黃金和鉑金耳環</b-card></b-col>
  </b-row>
  </div>
</template>

<script>

export default {
  
  name: 'cards',
  data: function () {
    return {
      show: true,
      variants: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
      options:['1', '2', '3', '4', '5'],
      title: 'Fall Limited Edition Sneakers',
      price: "130.000",
      count: 1,
      mainImage: '/assets/image-product-1.jpg',
      images: [
        '/assets/image-product-1.jpg',
        '/assets/image-product-2.jpg',
        '/assets/image-product-3.jpg',
        '/assets/image-product-4.jpg'
      ],

      mainCategory: 'Collections',
      categories: [
          'Collections',
          'Men',
          'Women',
          'About',
          'Contact',
      ],
      cartItems: [],
      showImageModal: false,
      slide: 0,
    }
  },
  methods:{
     submit() {
      var existingEntries = JSON.parse(localStorage.getItem("myCart"));

      if(existingEntries == null) existingEntries = [];
    
      var entry = {
        title: this.title,
        price: this.price,
        quantity: this.count,
        image: this.mainImage,
      };

      localStorage.setItem("latestItem", JSON.stringify(entry));
      
      // Save allEntries back to local storage
      existingEntries.push(entry);
      localStorage.setItem("myCart", JSON.stringify(existingEntries));

      console.log('myCart', JSON.parse(localStorage.getItem('myCart')));

      this.cartItems = JSON.parse(localStorage.getItem('myCart'));
    }
  }
}
</script>

<style scoped>
  .fade-enter-active {
    transition: all .3s ease;
  }
  .fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .fade-enter, .fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
  p1{
    font-size:x-large ;
  }
</style>


<template>
  <div class="animated fadeIn">
    <p1>串飾</p1><br/><br/>
    <b-row>
      <b-col>
        
        <b-card>
          
          <div slot="footer">NT$11,000
            
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
          Add to cart
        </b-button>
      </div>
      
      
  </b-modal> -->
          

                      
          </div>
      <router-link to="/theme/product7">
          <b-img src="https://i.imgur.com/lvr4S4J.jpg"
           fluid alt="Responsive image" class="rounded mx-auto d-block"  height = "60" width="120" ></b-img></router-link><br/>秋葉靜美黃鋯石吊飾</b-card>
       
      </b-col>
       <b-col>
        <b-card>
          <div slot="footer">
              NT$6,050,000
              
              <b-button style="width: 90px;height: 30px;background-color:pink" class="float-right " :disabled="this.count == 0" @click="submit">
                  <span style="font-weight: 600">
                    加入最愛
                  </span>
                </b-button>
          </div>
           <router-link to="/theme/info">
            <b-img src="https://i.imgur.com/QsH8Gye.jpg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img></router-link><br/>
          DB Classic 鑲彩鑽戒指</b-card>
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
           <router-link to="/theme/info">
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
           <router-link to="/theme/info">
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
          <router-link to="/theme/info">
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
          <router-link to="/theme/info">
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
          <router-link to="/theme/info">
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
      options:['1', '2', '3', '4', '5']
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


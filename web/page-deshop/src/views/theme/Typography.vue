<template>
  <div class="animated fadeIn">
    <p1>婚嫁珠寶</p1><br/><br/>
    <b-row>
      
      <b-col>
        <b-card>
          <div slot="footer">
        <span class="" style="font-weight: 700; color: rgb(183, 183, 183); text-decoration: line-through;">
                  NT$45,000
                </span>
          NT$43,000
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
          <router-link to="/theme/product1">
          <b-img src="
      https://i.imgur.com/amRJyz0.jpg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img></router-link><br/>
          DB Classic 鉑金單鑽戒指 (3mm)</b-card>
      </b-col>
       <b-col>
        <b-card>
          <div slot="footer">
           NT$29,000 
            <b-button style="width: 90px;height: 30px;background-color:pink" class="float-right " :disabled="this.count == 0" @click="submit">
                  <span style="font-weight: 600">
                    加入最愛
                  </span>
                </b-button>
          </div>
           <router-link to="/theme/product">
            <b-img src="
      https://i.imgur.com/lOKIufy.jpg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img></router-link><br/>
          DB Classic 玫瑰金單鑽戒指 (3mm)</b-card>
      </b-col>
    </b-row>
    <b-row>
       <b-col>
        <b-card>
          <div slot="footer">
             NT$55,000 <b-button style="width: 90px;height: 30px;background-color:pink" class="float-right " :disabled="this.count == 0" @click="submit">
                  <span style="font-weight: 600">
                    加入最愛
                  </span>
                </b-button>
          </div>
            <router-link to="/theme/product">
          <b-img src="
      https://i.imgur.com/HIf4ybc.jpg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img></router-link><br/>
        Infinity 白金鑽石戒指 (3mm)</b-card>
      </b-col>
       <b-col>
        <b-card>
          <div slot="footer">
             NT$350,00 <b-button style="width: 90px;height: 30px;background-color:pink" class="float-right " :disabled="this.count == 0" @click="submit">
                  <span style="font-weight: 600">
                    加入最愛
                  </span>
                </b-button>
          </div>
           <router-link to="/theme/product">
          <b-img src="
      https://i.imgur.com/iGNQqqo.jpg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img></router-link><br/>
          Arpeggia 白金單行戒指</b-card>
      </b-col>
    </b-row>
    <b-row>
       <b-col>
        <b-card>
          <div slot="footer">
          NT$560,000 <b-button style="width: 90px;height: 30px;background-color:pink" class="float-right " :disabled="this.count == 0" @click="submit">
                  <span style="font-weight: 600">
                    加入最愛
                  </span>
                </b-button>
          </div>
          <router-link to="/theme/product">
          <b-img src="
      https://i.imgur.com/I9XZpIO.jpg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img></router-link><br/>
         Aura 梨形黃鑽垂墜式耳環</b-card>
      </b-col>
       <b-col>
        <b-card>
          <div slot="footer">
            NT$80,000  <b-button style="width: 90px;height: 30px;background-color:pink" class="float-right " :disabled="this.count == 0" @click="submit">
                  <span style="font-weight: 600">
                    加入最愛
                  </span>
                </b-button>
          </div>
           <router-link to="/theme/product">
            <b-img src="
      https://i.imgur.com/Lm3N1g9.jpg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img> </router-link><br/>
          Aura Eternity 黃金全鑲黃鑽戒指</b-card>
      </b-col>
    </b-row>
    <b-row>
       <b-col>
        <b-card>
          <div slot="footer">
             NT$308,000 <b-button style="width: 90px;height: 30px;background-color:pink" class="float-right " :disabled="this.count == 0" @click="submit">
                  <span style="font-weight: 600">
                    加入最愛
                  </span>
                </b-button>
          </div>
          <router-link to="/theme/product">
          <b-img src="
      https://i.imgur.com/5hhHcI8.jpg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img></router-link><br/>
          Aura 梨形黃鑽吊墜項鍊</b-card>
      </b-col>
       <b-col>
        <b-card>
          <div slot="footer">
            NT$1,300,000 <b-button style="width: 90px;height: 30px;background-color:pink" class="float-right " :disabled="this.count == 0" @click="submit">
                  <span style="font-weight: 600">
                    加入最愛
                  </span>
                </b-button>
          </div>
          <router-link to="/theme/product">
          <b-img src="
      https://i.imgur.com/7sgNKNx.jpg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img></router-link><br/>
         Arpeggia 白金頸鍊 髮飾</b-card>
      </b-col>
    </b-row>
    <b-row>
       <b-col>
        <b-card>
          <div slot="footer">
         NT$250,000 <b-button style="width: 90px;height: 30px;background-color:pink" class="float-right " :disabled="this.count == 0" @click="submit">
                  <span style="font-weight: 600">
                    加入最愛
                  </span>
                </b-button>
          </div>
          <router-link to="/theme/product">
          <b-img src="
      https://i.imgur.com/pWYDPy2.jpg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img></router-link><br/>
         Aura 鉑金梨形鑽石戒指</b-card>
      </b-col>
       <b-col>
        <b-card>
          <div slot="footer">
            NT$3,250,000  <b-button style="width: 90px;height: 30px;background-color:pink" class="float-right " :disabled="this.count == 0" @click="submit">
                  <span style="font-weight: 600">
                    加入最愛
                  </span>
                </b-button>
          </div>
          <router-link to="/theme/product">
            <b-img src="
      https://i.imgur.com/rnxURGY.jpg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img></router-link><br/>
          Adonis Rose高級珠寶鉑金梨形鑽石戒指</b-card>
      </b-col>
    </b-row>
    <b-row>
       <b-col>
        <b-card>
          <div slot="footer">
             NT$5,650,000 <b-button style="width: 90px;height: 30px;background-color:pink" class="float-right " :disabled="this.count == 0" @click="submit">
                  <span style="font-weight: 600">
                    加入最愛
                  </span>
                </b-button>
          </div>
           <router-link to="/theme/product">
          <b-img src="
      https://i.imgur.com/gBpB7ci.jpg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img></router-link><br/>
          Volute高級珠寶鉑金梨形鑽石戒指</b-card>
      </b-col>
       <b-col>
        <b-card>
          <div slot="footer">
             NT$780,000 <b-button style="width: 90px;height: 30px;background-color:pink" class="float-right " :disabled="this.count == 0" @click="submit">
                  <span style="font-weight: 600">
                    加入最愛
                  </span>
                </b-button>
          </div>
           <router-link to="/theme/product">
          <b-img src="
      https://i.imgur.com/V7pwsVB.jpg" fluid alt="Responsive image" class="rounded mx-auto d-block" height = "60" width="120" ></b-img></router-link><br/>
          Allegria Eternity 鉑金全鑲戒指</b-card>
      </b-col>
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
      cartItems: [],
      showImageModal: false,
      slide: 0,
    }
  },
   mounted() {
    const items = JSON.parse(localStorage.getItem('myCart'));
    console.log('items', items);
    this.cartItems = items;
  },
   computed: {
    cartItemsCount() {
      return this.cartItems.length;
    }
  },
  methods: {
    showMainImage() {
      this.showImageModal = true;
    },
    increment() {
      this.count += 1;
    },
    decrement() {
      if (this.count - 1 >= 0) {
        this.count -= 1;
      }
    },
    changeMainImage(image) {
      this.mainImage = image;
    },
    calcPrice(item) {
      return parseFloat(parseFloat(item.price).toFixed(2) * item.quantity).toFixed(2);
    },
    deleteItem(item, index) {
      this.cartItems.splice(index, 1);
      localStorage.setItem('myCart', JSON.stringify(this.cartItems));
    },
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


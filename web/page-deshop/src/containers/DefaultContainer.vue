<template>
  <div class="app">
    <AppHeader fixed>
        
      <SidebarToggler class="d-lg-none" display="md" mobile />
    
        <!-- <img class="navbar-brand-full" src="https://i.imgur.com/eJZJGoG.png" width="130" height="40" alt="VKART Logo" > -->
    <span style="font-size: 25px; font-weight: 700; font-family: Amaranth; color: rgba(33, 46, 187, 0.8)">
                 SHOP LOGO
              </span>
        <!-- <b-navbar-brand class="mb-0">
              <span style="font-size: 28px; font-weight: 700; font-family: Amaranth">
                  Jujue shop
              </span>
          </b-navbar-brand> -->
      <SidebarToggler class="d-md-down-none" display="lg" />
      
      
      <b-navbar-nav class="ml-auto">
       
       <!-- <input class="form-control" type="text" placeholder="Search by  name" aria-label="Search"/> -->
       <!-- <b-button pill variant="secondary" class="my-2 my-sm-0 cui-magnifying-glass" type="submit"></b-button> -->
      <div class="search-bar input-group" @click="searchModalVisible = true">
              <button  class="my-2 my-sm-0 cui-magnifying-glass" id="search-button" data-toggle="modal" data-target="#searchModal">
                
              </button>
               
            </div>
            <modal :show.sync="searchModalVisible"
                   class="modal-search"
                   id="searchModal"
                   :centered="false"
                   :show-close="true">
              <input slot="header" v-model="searchQuery" type="text" class="form-control" id="inlineFormInputGroup" placeholder="搜尋 DESHOP">
            <span class="searchmsn10569-text17"> 熱門標籤</span>
           <div class="searchmsn10569-searchmsn10569">
      <img
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMzc1JyBoZWlnaHQ9JzI1MCcgdmlld0JveD0nMCAwIDM3NSAyNTAnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxnIGZpbHRlcj0ndXJsKCNmaWx0ZXIwX2JfMTA1XzYyKSc+CjxyZWN0IHdpZHRoPSczNzUnIGhlaWdodD0nMjUwJyByeD0nNScgZmlsbD0nI0YyRjJGMicvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSdmaWx0ZXIwX2JfMTA1XzYyJyB4PSctNScgeT0nLTUnIHdpZHRoPSczODUnIGhlaWdodD0nMjYwJyBmaWx0ZXJVbml0cz0ndXNlclNwYWNlT25Vc2UnIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9JzAnIHJlc3VsdD0nQmFja2dyb3VuZEltYWdlRml4Jy8+CjxmZUdhdXNzaWFuQmx1ciBpbj0nQmFja2dyb3VuZEltYWdlJyBzdGREZXZpYXRpb249JzIuNScvPgo8ZmVDb21wb3NpdGUgaW4yPSdTb3VyY2VBbHBoYScgb3BlcmF0b3I9J2luJyByZXN1bHQ9J2VmZmVjdDFfYmFja2dyb3VuZEJsdXJfMTA1XzYyJy8+CjxmZUJsZW5kIG1vZGU9J25vcm1hbCcgaW49J1NvdXJjZUdyYXBoaWMnIGluMj0nZWZmZWN0MV9iYWNrZ3JvdW5kQmx1cl8xMDVfNjInIHJlc3VsdD0nc2hhcGUnLz4KPC9maWx0ZXI+CjwvZGVmcz4KPC9zdmc+Cg=="
        alt="searchbox210562"
        class="searchmsn10569-image"
      />
        <div class="searchmsn10569-group510579">
          <span class="searchmsn10569-text01">慈母</span>
        </div>
        <div class="searchmsn10569-group1310595">
          <span class="searchmsn10569-text02">慈母</span>
        </div>
        <div class="searchmsn10569-group910583">
          <span class="searchmsn10569-text03">慈母</span>
        </div>
        <div class="searchmsn10569-group1410598">
          <span class="searchmsn10569-text04">慈母</span>
        </div>
        <div class="searchmsn10569-group610580">
          <span class="searchmsn10569-text05">翡翠配飾</span>
        </div>
        <div class="searchmsn10569-group15105101">
          <span class="searchmsn10569-text06">翡翠配飾</span>
        </div>
        <div class="searchmsn10569-group1010586">
          <span class="searchmsn10569-text07">翡翠配飾</span>
        </div>
        <div class="searchmsn10569-group16105104">
          <span class="searchmsn10569-text08">翡翠配飾</span>
        </div>
        <div class="searchmsn10569-group710581">
          <span class="searchmsn10569-text09">玉石</span>
        </div>
        <div class="searchmsn10569-group17105107">
          <span class="searchmsn10569-text10">玉石</span>
        </div>
        <div class="searchmsn10569-group1110589">
          <span class="searchmsn10569-text11">玉石</span>
        </div>
        <div class="searchmsn10569-group18105110">
          <span class="searchmsn10569-text12">玉石</span>
        </div>
        <div class="searchmsn10569-group810582">
          <span class="searchmsn10569-text13">翡翠手鐲</span>
        </div>
        <div class="searchmsn10569-group19105113">
          <span class="searchmsn10569-text14">翡翠手鐲</span>
        </div>
        <div class="searchmsn10569-group1210592">
          <span class="searchmsn10569-text15">翡翠手鐲</span>
        </div>
        <div class="searchmsn10569-group20105116">
          <span class="searchmsn10569-text16">翡翠手鐲</span>
        </div>
           </div>
            </modal>
        <!-- <div>
           <b-nav-item class="px-4" to="/users">LogIn/SignUp   
         </b-nav-item>
        
          </div> -->
              <b-nav-item class="px-4">
                  <b-dropdown size="xl"  variant="link" toggle-class="text-decoration-none" no-caret>
                        <template #button-content>
                          <b-img height="30px" width="25px" src="https://i.imgur.com/bBd0GaT.png" alt=""></b-img>
                          <span class="cart-count">
                            {{ cartItemsCount }}
                          </span>
                      </template>

                      <!-- <b-dropdown-item href="#"> -->
                      <div style="min-width: 350px; box-shadow: 0px 0px 15px 10px rgba(0,0,0,0.1); border-radius: 15px !important;">
                          <div class="d-flex flex-column">
                              <div class="col-12 p-3 border-bottom">
                                  <span style="font-weight: 700">
                                      我的願望清單
                                  </span>
                              </div>
                              <div class="col-12 px-1 mt-3" style="max-height: 200px; overflow: auto">
                                <div v-if="cartItems && cartItems.length > 0">
                                    <div v-for="(item, index) in cartItems" :key="index" class="d-flex flex-row justify-content-between my-3">
                                      <div class="col-3 px-0 text-center">
                                        <img :src="item.image" alt="product Image" width="70%" height="50px" style="object-fit: cover; border-radius: 10px">
                                      </div>
                                      <div class="col-8 px-1 d-flex flex-column">
                                        <div>
                                            <span style="font-size: 14px" class="text-muted">
                                                {{ item.title }}
                                            </span>
                                        </div>
                                        <div>
                                            <span style="font-size: 15px" class="text-muted">
                                              ${{ parseFloat(item.price).toFixed(2) }} X {{ item.quantity }}
                                            </span>
                                            <span class="" style="font-weight: 700">
                                              ${{ calcPrice(item) }}
                                            </span>
                                        </div>
                                      </div>
                                      <div class="col-1 px-1">
                                        <span @click="deleteItem(item, index)">
                                            <img height="20px" width="20px" src="https://i.imgur.com/jFpTTmP.png" alt="">
                                        </span>
                                      </div>
                                    </div>
                                </div>
                                <div v-else>
                                    <div class="row justify-content-center align-items-center" style="min-height: 100px">
                                        <div class="col-12 text-center">
                                            <span class="text-muted" style="font-weight: 600">
                                               您的願望清單為空白.
                                            </span>
                                        </div>
                                    </div>
                                    <div class="col-12 my-3">
                                <button onclick="location.href='#/theme/Colors'" class="p-3 text-white border-0 w-100 checkout-btn" style="background-color: hsl(26, 100%, 55%); font-weight: 700; font-size: 14px; border-radius: 10px">
                                  開始瀏覽
                                </button>
                              </div>
                                </div>
                              </div>
                              
                          </div>
                      </div>
                      <!-- </b-dropdown-item> -->
                  </b-dropdown>
              </b-nav-item>
              <!-- <b-nav-item class="col-6">
                  <span>
                  <b-img src="./assets/image-avatar.png" class="avatar" rounded="circle" alt="Circle image" height="40px"></b-img>
                  </span>
            </b-nav-item> -->


          </b-navbar-nav>

      
      <!--<AsideToggler class="d-lg-none" mobile />-->
    </AppHeader>
    <div class="app-body">
      <AppSidebar fixed>
        <SidebarHeader/>
        <SidebarForm/>    <SidebarNav :navItems="nav"></SidebarNav>
        <SidebarFooter/>
        <SidebarMinimizer/>
      </AppSidebar>
      <main class="main">
        
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
      <AppAside fixed>
     
        <DefaultAside/>
      </AppAside>
    </div>
   
  </div>
</template>

<script>
import nav from '@/_nav'
import { Header as AppHeader, SidebarToggler, Sidebar as AppSidebar, SidebarFooter, SidebarForm, SidebarHeader, SidebarMinimizer, SidebarNav, Aside as AppAside, AsideToggler, Footer as TheFooter, Breadcrumb } from '@coreui/vue'
import DefaultAside from './DefaultAside'
import DefaultHeaderDropdownAccnt from './DefaultHeaderDropdownAccnt'
import { CollapseTransition } from 'vue2-transitions';
import Modal from '@/views/Modal';
export default {
  name: 'DefaultContainer',
  components: {
    AsideToggler,
    AppHeader,
    AppSidebar,
    AppAside,
    TheFooter,
    Breadcrumb,
    DefaultAside,
    DefaultHeaderDropdownAccnt,
    SidebarForm,
    SidebarFooter,
    SidebarToggler,
    SidebarHeader,
    SidebarNav,
    SidebarMinimizer,
    CollapseTransition,
    Modal

  },
  data () {
    return {
      nav: nav.items,
      cartItems: [],
      showImageModal: false,
      slide: 0,
      searchModalVisible: false,
      searchQuery: ''
    }
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched.filter((route) => route.name || route.meta.label )
    },
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
/* .app{

  background-image: linear-gradient(rgba(0, 255, 0, 0.384), rgba(204, 0, 255, 0.5)),
                  url("https://i.imgur.com/lby5sZz.jpg");
} */
.sider-bar{

  background-image: linear-gradient(rgba(0, 255, 0, 0.384), rgba(204, 0, 255, 0.5)),
                  url("https://i.imgur.com/lby5sZz.jpg");
}
#ml-auto{
  text-align: center;
}
.image {
  border-radius: 10px;
}

@media (max-width: 768px) {
  .image {
    border-radius: 0px !important;
  }
}

.discount {
  /* border-radius: 10px; */
  background-color: hsl(25, 100%, 94%);
}

.bg-quantity {
  background-color: #f1f1f1;
  border-radius: 10px;
  font-size: 16px;
  padding: 14px;
}

.bg-add-cart {
  background-color: hsl(26, 100%, 55%);
  color: white !important;
  border-radius: 10px;
  font-size: 15px;
  padding: 14px;
  transition: 0.3s;
  cursor: pointer;
  box-shadow: 0px 23px 19px 10px hsl(25, 100%, 94%);
}

.bg-add-cart:hover {
  background-color: hsl(24, 91%, 86%);
}

.plus-minus {
  color: hsl(26, 100%, 55%);
  cursor: pointer;
}

.thumbnail img{
  cursor: pointer;
  opacity: 1;
  transition: .3s;
}

.thumbnail:hover img{
  /* background-color: #d2d2d2 !important;  */
  opacity: 0.3 !important;
}

.activess {
  opacity: 0.4 !important;
  border: 3px solid hsl(26, 100%, 55%) !important;
}

i {
  transition: 0.3s;
}

i:hover {
  color: hsl(24, 91%, 86%);
}

/* navbar */
.avatar:hover {
    border: 2px solid hsl(26, 100%, 55%) !important;
}

.category {
    transition: 0.1s;
}

.category:hover {
    border-bottom: 3px solid hsl(26, 100%, 55%);
}

.category:hover .text {
  color: black !important;
}

.checkout-btn {
  transition: 0.3s;
}

.checkout-btn:hover {
  background-color: hsl(24, 91%, 86%) !important;
}

.cart-count {
  position: absolute;
  top: 3px;
  left: 22px;
  padding: 0px 7px;
  font-size: 9px;
  background-color: hsla(327, 46%, 41%, 0.685);
  color: white;
  border-radius: 5px;
}
</style>
<style scoped>
  .dropdown-menu.dropdown-menu-right.show {
    padding: 0px !important;
    border: 0px !important;
  }

  .appbar-mobile .dropdown-menu.show {
    position: absolute;
    left: -220px;
    border: none;
    padding: 0px;
    border-radius: 15px;
  }

  .modal-content {
    background-color: transparent !important;
    border: none !important; 
  }

  .modal-header {
    border: none !important;
  }

  .modal-header .close {
    opacity: 1 !important;
  }

  .carousel-control-prev {
    opacity: 1 !important;
    align-items: center !important;
    position: absolute;
    left: 0px !important;
  }

  .carousel-control-next {
    opacity: 1 !important;
    align-items: center !important;
    position: absolute;
    right: 0px !important;
  }

  .carousel-control-prev-icon {
    width: 30px !important;
    height: 30px !important;
  }

  .carousel-control-next-icon {
    width: 30px !important;
    height: 30px !important;
  }

  .navbar-toggler.collapsed {
    border: none;
    padding: 0px;
  }

  @media (max-width: 768px) {
    .carousel-item .img-fluid {
      border-radius: 0px !important;
    }  
  }
  .carousel-item .img-fluid {
    border-radius: 30px;
  }

  .searchmsn10569-container {
  min-height: 100vh;
}
.searchmsn10569-searchmsn10569 {
  width: 375px;
  height: 250px;
  display: flex;
  position: relative;
  max-width: 375px;
  box-sizing: border-box;
  align-items: flex-start;
  border-color: transparent;
}
.searchmsn10569-image {
  top: 0px;
  left: 0px;
  width: 350px;
  height: 250px;
  position: absolute;
  object-fit: cover;
  border-color: transparent;
  border-radius: 5px;
  background-color: rgba(242, 242, 242, 1);
}
.searchmsn10569-image1 {
  top: 19px;
  left: 27px;
  width: 320px;
  height: 30px;
  position: absolute;
  object-fit: cover;
  border-color: transparent;
  border-radius: 10px;
  background-color: rgba(230, 230, 230, 1);
}
.searchmsn10569-image2 {
  top: 24px;
  left: 32px;
  width: 20px;
  height: 20px;
  position: absolute;
  object-fit: cover;
  border-color: transparent;
}
.searchmsn10569-text {
  top: 25px;
  left: 70px;
  color: rgba(0, 0, 0, 0.30000001192092896);
  height: auto;
  position: absolute;
  font-size: 14px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Inter;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.searchmsn10569-hottags105119 {
  top: 88px;
  left: 48px;
  width: 279px;
  height: 134px;
  display: flex;
  position: absolute;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
}
.searchmsn10569-group510579 {
  top: 0px;
  left: 0px;
  width: 48px;
  height: 26px;
  display: flex;
  position: absolute;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  background-color: rgb(255, 255, 255);
}
.searchmsn10569-text01 {
  top: 4px;
  left: 10px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 14px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Inter;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.searchmsn10569-group1310595 {
  top: 72px;
  left: 0px;
  width: 48px;
  height: 26px;
  display: flex;
  position: absolute;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  background-color: rgba(255, 255, 255, 1);
}
.searchmsn10569-text02 {
  top: 4px;
  left: 10px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 14px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Inter;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.searchmsn10569-group910583 {
  top: 36px;
  left: 231px;
  width: 48px;
  height: 26px;
  display: flex;
  position: absolute;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  background-color: rgba(255, 255, 255, 1);
}
.searchmsn10569-text03 {
  top: 4px;
  left: 10px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 14px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Inter;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.searchmsn10569-group1410598 {
  top: 108px;
  left: 231px;
  width: 48px;
  height: 26px;
  display: flex;
  position: absolute;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  background-color: rgba(255, 255, 255, 1);
}
.searchmsn10569-text04 {
  top: 4px;
  left: 10px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 14px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Inter;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.searchmsn10569-group610580 {
  top: 0px;
  left: 59px;
  width: 75px;
  height: 26px;
  display: flex;
  position: absolute;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  background-color: rgba(255, 255, 255, 1);
}
.searchmsn10569-text05 {
  top: 4px;
  left: 9px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 14px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Inter;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.searchmsn10569-group15105101 {
  top: 72px;
  left: 59px;
  width: 75px;
  height: 26px;
  display: flex;
  position: absolute;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  background-color: rgba(255, 255, 255, 1);
}
.searchmsn10569-text06 {
  top: 4px;
  left: 9px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 14px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Inter;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.searchmsn10569-group1010586 {
  top: 36px;
  left: 1px;
  width: 75px;
  height: 26px;
  display: flex;
  position: absolute;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  background-color: rgba(255, 255, 255, 1);
}
.searchmsn10569-text07 {
  top: 4px;
  left: 9px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 14px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Inter;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.searchmsn10569-group16105104 {
  top: 108px;
  left: 1px;
  width: 75px;
  height: 26px;
  display: flex;
  position: absolute;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  background-color: rgba(255, 255, 255, 1);
}
.searchmsn10569-text08 {
  top: 4px;
  left: 9px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 14px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Inter;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.searchmsn10569-group710581 {
  top: 0px;
  left: 145px;
  width: 48px;
  height: 26px;
  display: flex;
  position: absolute;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  background-color: rgba(255, 255, 255, 1);
}
.searchmsn10569-text09 {
  top: 4px;
  left: 10px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 14px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Inter;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.searchmsn10569-group17105107 {
  top: 72px;
  left: 145px;
  width: 48px;
  height: 26px;
  display: flex;
  position: absolute;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  background-color: rgba(255, 255, 255, 1);
}
.searchmsn10569-text10 {
  top: 4px;
  left: 10px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 14px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Inter;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.searchmsn10569-group1110589 {
  top: 36px;
  left: 86px;
  width: 48px;
  height: 26px;
  display: flex;
  position: absolute;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  background-color: rgba(255, 255, 255, 1);
}
.searchmsn10569-text11 {
  top: 4px;
  left: 10px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 14px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Inter;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.searchmsn10569-group18105110 {
  top: 108px;
  left: 86px;
  width: 48px;
  height: 26px;
  display: flex;
  position: absolute;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  background-color: rgba(255, 255, 255, 1);
}
.searchmsn10569-text12 {
  top: 4px;
  left: 10px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 14px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Inter;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.searchmsn10569-group810582 {
  top: 0px;
  left: 204px;
  width: 75px;
  height: 26px;
  display: flex;
  position: absolute;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  background-color: rgba(255, 255, 255, 1);
}
.searchmsn10569-text13 {
  top: 4px;
  left: 9px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 14px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Inter;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.searchmsn10569-group19105113 {
  top: 72px;
  left: 204px;
  width: 75px;
  height: 26px;
  display: flex;
  position: absolute;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  background-color: rgba(255, 255, 255, 1);
}
.searchmsn10569-text14 {
  top: 4px;
  left: 9px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 14px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Inter;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.searchmsn10569-group1210592 {
  top: 36px;
  left: 146px;
  width: 75px;
  height: 26px;
  display: flex;
  position: absolute;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  background-color: rgba(255, 255, 255, 1);
}
.searchmsn10569-text15 {
  top: 4px;
  left: 9px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 14px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Inter;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.searchmsn10569-group20105116 {
  top: 108px;
  left: 146px;
  width: 75px;
  height: 26px;
  display: flex;
  position: absolute;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  background-color: rgba(255, 255, 255, 1);
}
.searchmsn10569-text16 {
  top: 4px;
  left: 9px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 14px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Inter;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.searchmsn10569-text17 {
 
  color: rgba(0, 0, 0, 0.30000001192092896);
  font-size: 14px;
  text-align: center;
  font-weight: 400px;

}
</style>
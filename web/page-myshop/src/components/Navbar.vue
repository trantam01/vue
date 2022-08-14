<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <!--    Logo-->
    <router-link class="navbar-brand" :to="{ name: 'Home' }">
      <span style="font-size: 28px; font-weight: 700; font-family: Amaranth; color: #d1ffff">
                 MY SHOP
              </span>
      <!-- <img id="logo" src="https://i.imgur.com/eJZJGoG.png" /> -->
    </router-link>
       <!-- <div class="search-bar input-group" @click="searchModalVisible = true">
              <button  class="my-2 my-sm-0 cui-magnifying-glass" id="search-button" data-toggle="modal" data-target="#searchModal">   
              </button>
            </div>
            <modal
                   class="modal-search"
                   id="searchModal"
                   :centered="false"
                   :show-close="true">
              <input  v-model="searchQuery" type="text" class="form-control" id="inlineFormInputGroup" placeholder="搜尋...">
            </modal> -->
              <router-link class="navbar-nav ml-auto" :to="{ name: 'signin' }">
                 <img id="logo" src="https://i.imgur.com/Ew9T6cV.png" />        
              </router-link>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: ["cartCount"],
  data() {
    return {
      token: null,
      searchModalVisible: false,
    };
  },
  methods: {
    signout() {
      localStorage.removeItem("token");
      this.token = null;
      this.$emit("resetCartCount");
      this.$router.push({ name: "Home" });
      swal({
        text: "Logged you out. Visit Again",
        icon: "success",
        closeOnClickOutside: false,
      });
    },
  },
  mounted() {
    this.token = localStorage.getItem("token");
  },
};
</script>

<style scoped>
#logo {
  width: 50px;
  height: 50px;
  margin-left: 20px;
  margin-right: 20px;
}
.nav-link {
  color: rgba(255, 255, 255);
}
.login{
    display: flex;
  justify-content: right;
  align-items: right;
}
#search-button-navbar {
  background-color: #febd69;
  border-color: #febd69;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}
#nav-cart-count {
  background-color: red;
  color: white;
  border-radius: 50%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  font-size: 15px;
  margin-left: 10px;
}
#cart {
  position: relative;
}
</style>

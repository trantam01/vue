<template>
  <div class="About">
    <p>尋找珠寶店</p>
    <form
          @submit.stop.prevent="handleSubmit"
          class="web_search_select"
          required
        >
        選擇區域: 
          <select v-model="city" name="class" id="web_class">
            <option value="">縣市</option>
            <option value="Taipei">台北市</option>
            <option value="NewTaipei">新北市</option>
            <option value="Taoyuan">桃園市</option>
            <option value="Taichung">臺中市</option>
            <option value="Tainan">臺南市</option>
            <option value="Kaohsiung">高雄市</option>
            <option value="Keelung">基隆市</option>
            <option value="Hsinchu">新竹市</option>
            <option value="HsinchuCounty">新竹縣</option>
            <option value="MiaoliCounty">苗栗縣</option>
            <option value="ChanghuaCounty">彰化縣</option>
            <option value="NantouCounty">南投縣</option>
            <option value="YunlinCounty">雲林縣</option>
            <option value="ChiayiCounty">嘉義縣</option>
            <option value="Chiayi">嘉義市</option>
            <option value="PingtungCounty">屏東縣</option>
            <option value="YilanCounty">宜蘭縣</option>
            <option value="HualienCounty">花蓮縣</option>
            <option value="TaitungCounty">臺東縣</option>
            <option value="KinmenCounty">金門縣</option>
            <option value="PenghuCounty">澎湖縣</option>
            <option value="LienchiangCounty">連江縣</option>
          </select>
          <select v-model="area" name="class" id="web_location" required>
            <option value="">區域</option>
            <option
              v-for="location in location"
              :key="location.id"
              :value="location"
            >
              {{ location }}
            </option>
          </select>
          <button type="submit" class="btn btn-info btn-sm">
            <li class="search"><i class="bi bi-search"></i></li>
          </button>
        </form>
 <iframe width="600" height="500" id="gmap_canvas" 
 src="https://maps.google.com/maps?q=%E5%8F%B0%E5%8C%97%E5%B8%82%E4%BF%A1%E7%BE%A9%E5%8D%80%E4%BF%A1%E7%BE%A9%E8%B7%AF%E4%BA%94%E6%AE%B55%E8%99%9F&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
 </iframe><a href="https://fmovies-online.net"></a>
<!-- <div class="dvls_maps_row dvls_maps_body">
            <div class="dvls_maps_sidebar">
                                <div class="dvls_maps_sidebar_content">
                    <div class="dvls_result_status">Tìm thấy <strong></strong> cửa hàng</div>
                    <div class="dvls_result_wrap">
                        Đang tải...                    </div>
                </div>
                            </div>
            <div class="dvls_maps_main">
                <div id="dvls_maps"  data-lat="21.036637" data-lng="105.794227"></div>
            </div>
            <div id="dvls_fountainG">
                <div id="fountainG_1" class="fountainG"></div>
                <div id="fountainG_2" class="fountainG"></div>
                <div id="fountainG_3" class="fountainG"></div>
                <div id="fountainG_4" class="fountainG"></div>
                <div id="fountainG_5" class="fountainG"></div>
                <div id="fountainG_6" class="fountainG"></div>
                <div id="fountainG_7" class="fountainG"></div>
                <div id="fountainG_8" class="fountainG"></div>
            </div>
        </div> -->
    
 
  </div>
</template>

<script>
export default {
  name: "Product",
    data() {
    return {
      city: "",
      area: "",
      location: [],
      backgroundPic: "",
    };
  },
  method:{
    getCityArea(city) {
      getApi.getCityHotel(city).then((res) => {
        let result = res.data;
        // console.log(result[83]);
        let cityAreas = [];
        result.forEach((item) => {
          let location = item.Address;
          if (
            location.match("東區") ||
            location.match("南區") ||
            location.match("北區") ||
            location.match("西區") ||
            location.match("中區")
          ) {
            let areaIndex = location.indexOf("區");
            let areaName = location.slice(areaIndex - 1, areaIndex + 1);
            cityAreas.push(areaName);
          } else {
            let arrStr = location.split(""); //將字串轉換為陣列
            for (let i = 0; i < arrStr.length; i++) {
              if (arrStr[i] >= "0" && arrStr[i] <= "9") {
                arrStr[i] = "";
              }
            }
            arrStr = arrStr.join("");
            let area = arrStr.slice(3, 6);
            cityAreas.push(area);
          }
        });

        // 篩掉重複的
        this.location = cityAreas.filter(function (element, index, arr) {
          return arr.indexOf(element) === index;
        });
      });
    },
       
      handleSubmit() {
      this.$emit("after-selector-city", {
        city: this.city,
        area: this.area,
      });
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>  
/* .btn{
  width: 40px;
  height: 40px;
} */
#web_class {
          border: none;
          padding: 0.75rem;
          margin-right: 0.75rem;
          box-shadow: 0px 2px 4px rgba(13, 11, 12, 0.2);
          border-radius: 6px;
          font-size: 16px;
          width: 50%;
          font-weight: 600;
          cursor: pointer;
        }  
   #web_location {
          border: none;
          padding: 0.75rem;
          box-shadow: 0px 2px 4px rgba(13, 11, 12, 0.2);
          border-radius: 6px;
          font-size: 16px;
          width: 20%;
          font-weight: 600;
          cursor: pointer;
        }            
img {
  height: 50px;
}
p{
  font-size: 30px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
   font-size: 25px;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

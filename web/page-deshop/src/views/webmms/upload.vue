<template >
     <nav>
          <router-link :to="{ name: 'Home' }">
           <span style="font-size: 25px; font-weight: 700; font-family: Amaranth; color: rgba(33, 46, 187, 0.8)">
                 SHOP LOGO
              </span>
        </router-link>
        <br/>
        <br/>
      <ul>
              <button @click="sendMMS"><img height="30px" src='https://i.imgur.com/hBoKjgk.jpg' /> </button>  
               &nbsp;&nbsp;&nbsp; <button @click="resetInput"><img height="30px" src='https://i.imgur.com/lnrSTXh.jpg' /></button>
              &nbsp;&nbsp;&nbsp;
               <router-link to="/dashboard">
            <img src="https://i.imgur.com/2YRryxn.png" fluid alt="Responsive image" height="30px" /></router-link>   
       </ul>   

       <ul>
        
        <input v-model="ddn" class="form-control" type="text"  placeholder="DDN" aria-label="Input"/>
           <input v-model="topic" class="form-control" type="text"  placeholder="Topic" aria-label="Input"/> 
        
       </ul>
       <ul>
         
        <input v-model="payload" class="form-control" type="text"  placeholder="PayLoad" aria-label="Input"/>
           <input v-model="func" class="form-control" type="text"  placeholder="Func" aria-label="Input"/>
         
       </ul>
   <br/>  
   <hr/>
   <br/>
   <br/>
   
  </nav> 
</template>

<script>
import { set as setCookie, get as getCookie, remove as removeCookie } from "es-cookie";
import webmms from "webmms-client";
export default {
  name: "hello",
  data() {
    return {
      ddn:'',
      topic:'',
      payload:'',
      func:'',
      headers: [
        { text: "parameter", value: "parameter" },
        { text: "value", value: "value" }
      ],
      params: null,
      error: true,
      errorLoading: false,
      errorMsg: '',
      mmsReady: false,
      mms: null,
      eiInfo: {
          eiName: '',
          eiTag: '',
          ddn : ''
      },
      webmmsOptions : {
          EiToken: '',
          SToken: '',
          UToken: ''
      },
    };
  },
  computed: {
    tableParams() {
      const arr = [];
      const p = this.params;

      if (p) {
        Object.keys(p).forEach(k => {
          arr.push({
            parameter: k,
            value: p[k]
          });
        });
      }

      return arr;
    }
  },
  async created() {
    this.params = this.$router.query;
    this.startMMS();
  },
  async beforeMount() {
      await this.subscribeMMS();
  },
  beforeDestroy() {
    this.removeEvent();
  },
  methods: {
    resetInput() {
      this.ddn = "";
      this.topic = "";
      this.payload = "";
      this.func = "";
    },
    checkWebMMSState(){
        if(!this.mmsReady)
        {
          this.errorMsg = "WebMMS is not connected or registered.";
          this.errorLoading = true;
          return false;
        }else return  true;

      },
      async callMMS() {
      let reply = await this.mms.callMMS({
        DDN : this.ddn,
        topic :  this.topic,
        func: this.func,
        payload:  { data: 'Hello MMS' }
      });
      this.loading = false;
      console.log(reply);
      this.response = [];
      // if(error == 'OK'){

      // }else{
      //     this.errorMsg = error;
      //     this.error = true;
      // }
    },
    startMMS(){
          this.mms =  webmms({
            wsurl: 'https://ws.ypcloud.com',
            EiToken: getCookie("jj-EiToken") || "",
            SToken: getCookie("jj-SToken") || ""
          });

    },
       async sendMMS() {
       let reply = await this.mms.sendMMS({
        DDN : this.ddn,
        topic : this.topic,
        payload: this.payload
      });
        this.response = reply;
    },
    async subscribeMMS() {
        this.removeEvent = this.mms.on("registered", async reply => {
            console.log('reply=%s', JSON.stringify(reply))
             if(reply.ErrMsg == "OK"){
                this.eiInfo.ddn = reply.result.DDN;
                this.webmmsOptions.EiToken = reply.result.EiToken;
                this.webmmsOptions.SToken = reply.result.SToken;
                this.webmmsOptions.UToken = reply.result.UToken;
                if(this.eiInfo.eiName == ''){
                  this.eiInfo.eiName = reply.result.EiName ? reply.result.EiName : 'jb' + this.makeId(5);
                }
                 if(this.eiInfo.eiTag == ''){
                  this.eiInfo.eiTag = reply.result.EiTag ? reply.result.EiTag : '';
                }
                this.mmsReady = true;
                this.error = false;
             }else{
                this.mmsReady = false;
                this.error = false;
             }

             let expiredTime = 60 * 60 * 24 * 30 * 12;

             setCookie("jj-EiToken", this.webmmsOptions.EiToken);
             setCookie("jj-SToken", this.webmmsOptions.SToken);


             console.log('regtoCenter: %s', reply.ErrMsg);

            let deviceInfo = {"DDN":this.eiInfo.ddn,"EiOwner":"","EiName":this.eiInfo.eiName,"EiType":".page","EiTag":this.eiInfo.eiTag,"EiLoc":""};
            let result = await this.mms.setDeviceInfo(deviceInfo);

            console.log('SetDevice reply=%s', JSON.stringify(result));
        });

        this.mms.on('message', (method, from, data, body) => {
             this.mmsReady = true;
             this.error = false;
             console.log('rcve: from=%s, data=%s', from, JSON.stringify(data));
            if(typeof data == 'object' && !data.from)
              data.from = from;
            body.sender = data;
            if(data)
            {

              this.eventList.push(data.data);
              this.setLog({From : from, Data: data}, 'In');

            }
        });

        this.mms.on('state', msg => {
            console.log('WS error: %s', msg);
            this.mmsReady = false;
            this.error = true;
            this.loading = false;
        });

        this.mms.on('disconnect', msg => {
            this.mmsReady = false;
            this.error = true;
            this.loading = false;
        });

        this.mms.on('error', err => {
            this.mmsReady = false;
            this.error = true;
            this.loading = false;
        });

        this.mms.on('connect_error', err => {
            this.mmsReady = false;
            this.error = true;
            this.loading = false;
        });

        this.mms.on('connect_timeout', err => {
            this.mmsReady = false;
            this.error = true;
            this.loading = false;
        });
      },
  }
};
</script>

<style lang="sass" scoped>
nav 
  text-align: center;
  padding: 10px;
  background-color: rgba(131, 183, 204, 0.8)

p
  font-size: 50px;

button 
  padding: 5px 10px;
  margin: 2px 1px;
  cursor: pointer;

button:hover
 box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19); 

ul 
  list-style-type: none;
  padding: 0;
  

li 
  display: inline-block;
  text-align: center;
  font-size: 50px;
  margin: 0 10px;

input
 padding: 5px 10px;
 box-sizing: border-box;
 border: none;
 -webkit-border-radius: 50px;
 border-bottom: 2px solid #ddd;
 background-color: white

.hello
  &__title
    font-size: 3rem
    font-weight: 900
    letter-spacing: .3rem
    color: var(--v-primary-base)
    p
      margin-bottom: 0
  &__hint
    font-size: 1.5rem
    color: var(--v-secondary-base)
    animation: move 2s infinite ease-in-out
  &__paramList
    font-size: 2rem
    
    animation: shiny 2s infinite
    th
      background-color: var(--v-info-base)
      vertical-align: middle
    td
      vertical-align: middle

</style>

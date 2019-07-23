<template>
<div>
<div class="row d-flex flex-wrap align-items-center p-3 mwidth">
  <div class="col-6">
    <img :src="require('../assets/images/Onett_finalMob.png')" class="image-fluid" alt="">
  </div>
<div class="col-6 text-right">
    <b-button  class="customButton gradientButton" v-b-modal.modal-1 >
        <font-awesome-icon :icon="['fas', 'bars']"/>
    </b-button>
    <b-modal id="modal-1" >
      <template slot="modal-title">
        <h3 class="raleway orangeText">ONETT</h3>
      </template>
      <ul class="noList text-center  regularText  fill w-100">
        <li v-for="linkItem in links" :key="linkItem.name" class="p-2"><a :href="linkItem.link"><b-button class="w-100 outlineGradient outlineButton">{{linkItem.name}}</b-button></a></li>
      </ul>
      <template slot="modal-footer" slot-scope="{ ok, cancel, hide }">
      <b-button size="sm" class="outlineGradient outlineButton" @click="hide('forget')">
        Close
      </b-button>
    </template>
    </b-modal>

</div>

</div>
</div>

</template>
<style>
.noList{
  list-style-type: none;
}
.boxed{
background: inherit;
color: #ffffff;
border-radius: 0px;
border: 2px solid;
}
</style>
<script>
import router from 'vue-router'
export default {
  name:'NavBarItem',
  data(){
    return{
      links:[],
      currentUrl:String,
      currentName:String,
    }
  },
  methods:{
    activeLink(){
      this.links.forEach((linkItem) => {
         if(linkItem.link == this.currentUrl){
           this.currentName = linkItem.name + '';
           linkItem.active = true;
         }else{
           linkItem.active = false;
         }
      });
    },
    isMobile: function() {
      let check = false;
      return check;
    },
  },
  mounted(){
    this.currentUrl = window.location.pathname;
    this.links = [
    {
      name:"Home",
      link:"/",
      active:false
    },
    {
    name:"Fare Recomendator",
    link:"/fareformpage",
    active:false
  },
  {
    name:"Transport Authorities", 
    link:"/authorities",
    active:false,
  },
  {
    name:"About us",
    link:"https://osoc-es.github.io/onett/",
    active:false
  }
  ];
  this.mobile = false;
  this.activeLink();
  }
  
}
</script>
</script>

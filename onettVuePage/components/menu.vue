<template>
<div>
<div class="row d-flex flex-wrap align-items-center p-3">
  <div class="col-6">
    <h1 class="">ONETT</h1>
  </div>
<div class="col-6 text-right">
    <b-button  v-b-modal.modal-1 variant="outline-dark">
        <font-awesome-icon :icon="['fas', 'bars']"/>
    </b-button>
    <b-modal id="modal-1">
      <template slot="modal-title">
        <h3 class="raleway greyColor">ONETT</h3>
      </template>
      <ul class="noList text-center  regularText raleway fill w-100">
        <li v-for="linkItem in links" :key="linkItem.name" class="p-2 gradientHover greyColor"><b-button class="w-100 menuButton" :click="goTo(linkItem.link)">{{linkItem.name}}</b-button></li>
      </ul>
      <template slot="modal-footer" slot-scope="{ ok, cancel, hide }">
      <b-button size="sm" class="customButton gradientHover" @click="hide('forget')">
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
    activateMenu(){
      console.log("Hello World")
    },
    isMobile: function() {
      let check = false;
      return check;
    },
    goTo(link){
      //router.go(link)
    }
  },
  mounted(){
    this.currentUrl = window.location.pathname;
    this.links = [
  {
    name:"Fares",
    link:"/fares",
    active:false
  },
  {
    name:"Schedules",
    link:"/schedules",
    active:false,
  },
  {
    name:"Tickets",
    link:"/tickets",
    active:false
  },
  {
    name:"Filters",
    link:"/filters",
    active:false,
    
  },
    {
    name:"Lines",
    link:"/lines",
    active:false
  },
  {
    name:"Notifications",
    link:"/notifications",
    active:false
  },
    {
    name:"Settings",
    link:"/settings",
    active:false
  },
  {
    name:"Authorities", 
    link:"/authorities",
    active:false,
  },
  {
    name:"About us",
    link:"/about",
    active:false
  }
  ];
  this.mobile = false;
  this.activeLink();
  }
  
}
</script>
</script>

<template>
<div class="blackBg">
  <div class="row d-flex flex-wrap align-items-center container-fluid"> 
    <div class="col-md-4 p-3">
      <button class="btn text-white boxed raleway">
        <h2>ONETT</h2>
      </button>
    </div>
    <div v-for="linkItem in links" class="col-md-2 text-center" :key="linkItem.name">
      <button class="btn text-white">{{linkItem.name}}</button>
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
    isMobile: function() {
      let check = false;
      return check;
    },
    goTo(link){
      router.go(link)
    }
  },
  mounted(){
    this.currentUrl = window.location.pathname;
    this.links = [
  {
    name:"Profile",
    link:"/profile",
    active:false
  },
  {
    name:"Map",
    link:"/map",
    active:false,
  },
  {
    name:"Help",
    link:"/help",
    active:false,
    
  }, 
  {
    name:"Authorities", 
    link:"/authorities",
    active:false,
  }
  ];
  this.mobile = false;
  this.activeLink();
  }
  
}
</script>
</script>

<template>
  <div> 
    <ul class="noList text-light redBg fill">
      <li class="title">
        <h1>27TRIPS</h1>
      </li>
      <li v-for="linkItem in links" :key="linkItem.name" class="pt-5">
        <a :href="linkItem.link"><h4>{{linkItem.name}}</h4></a>
      </li>
    </ul>
  </div>  
</template>
<style>
.noList{
  list-style-type: none;
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

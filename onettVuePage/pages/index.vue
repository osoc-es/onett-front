<template>
<div class="fluid-container mwidth">
    <NavBarItem></NavBarItem>
    <div class="row mwidth pt-5 pl-5 pr-5">
        <div class="col-sm-12 container text-left raleway ">
                <h2  class="orangeText">WANNA SPEND LESS?</h2>
                <h5><span class="orangeText">ONETT</span> shows you the cheapest way to move around the city</h5>
        </div>
    </div>
    <div class="row mwidth pt-5">
        <div class="col-sm-12 text-center">
            <a href="/fareformpage"><b-button  class="gradientButton customButton raleway">Start to save up</b-button></a>
        </div>
    </div>
</div>    
</template>

<script>
import NavBarItem from '../components/menu'
import fareform from '../components/fareform'
export default {
    name:'home',
    components:{
        NavBarItem,
        fareform
    },
    data(){
        return{clicked:false}
    },
    methods:{
        startToSave(){
            console.log(this.clicked)
        }
    },
    mounted(){
        this.clicked = false;
    }
}
</script>

<style>

</style>

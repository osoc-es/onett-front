<template>
<div class="fluid-container">
    <NavBarItem></NavBarItem>
    <div class="row mwidth pt-3 pl-3 pr-3">
        <div class="col-sm-12  text-center raleway p-5">
                <h1  class="">WANNA SPEND LESS? </h1>  
                <h2><span class="orangeText">ONETT</span> shows you the cheapest way to move around the city</h2>
               
        </div>
    </div>
    <div class="mt-5">
        <h3 class="raleway  p-3">Proof of Concept about the power of the <span class="orangeText">RDF</span></h3>
        <queriesitem></queriesitem>
    </div>
</div>    
</template>

<script>
import NavBarItem from '../components/menu'
import fareform from '../components/fareform'
import queriesitem from '../components/queriesitem'
export default {
    name:'home',
    components:{
        NavBarItem,
        fareform,
        queriesitem
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

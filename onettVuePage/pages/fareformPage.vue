<template>
    <div class="mwidth h-100">
        <NavBarItem></NavBarItem>
        <div class="container h-100">
            <!-- <travelform></travelform> -->
            <div class="h-100 p-5 gradientBg text-light text-center raleway">
                    <h1>HEEELLLOOOOOO</h1>
                    <h1>Sorry for the inconvenence</h1>
                    <h1>These site is under maintenence</h1>
                    <h2>Checkout the power of the RDF</h2>
                    <a href="/">
                        <b-button size="lg" class="m-5 p-3 outlineWhiteButton outlineWhite">
                            Try It!
                        </b-button>
                    </a>
            </div>
        </div>
    </div>
</template>
<style>

</style>
<script>
import travelform from '../components/fareform'
import NavBarItem from '../components/menu'
export default {
    name:'travelpage',
    components:{
        NavBarItem,
        travelform
    }, data(){

    }, 
    methods:{

    },mounted(){
    }
}
</script>



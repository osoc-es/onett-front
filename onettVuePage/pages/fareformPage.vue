<template>
    <div class="mwidth">
        <NavBarItem></NavBarItem>
        <div class="container">
            <travelform></travelform>
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
    }
}
</script>



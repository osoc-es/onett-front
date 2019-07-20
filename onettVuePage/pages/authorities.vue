<template>
<div id="authorities" class="mwidth">
    <NavBarItem></NavBarItem>
    <div class="container row mwidth">
        <fileuploaderform class="col-sm-12"></fileuploaderform>
    </div>
    <footeritem></footeritem>
</div>
</template>
<style>

</style>
<script>
import NavBarItem from '../components/menu'
import fileuploaderform from '../components/fileuploaderform'
import footeritem from '../components/footeritem'
export default {
    name:'authorities', 
    components:{
    NavBarItem, 
    fileuploaderform, 
    footeritem
}
}
</script>

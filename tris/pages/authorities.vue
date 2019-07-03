<template>
<div id="authorities" class="row mwidth">
<NavBarItem class="col-sm-2"></NavBarItem>
<fileuploaderform class="col-sm"></fileuploaderform>
</div>
</template>
<style>

</style>
<script>
import NavBarItem from '../components/menu'
import fileuploaderform from '../components/fileuploaderform'
export default {
    name:'authorities', 
    components:{
    NavBarItem, 
    fileuploaderform
}
}
</script>

<template>
<div>

    <NavBarItem></NavBarItem>
    <ticketitem></ticketitem>
</div>
</template>


<style>

.titles{
    color: blueviolet;
    font-size: 100px;
    align-content: center;
    align-items: center;
}


</style>



<script>
import NavBarItem from '../components/menu'
import ticketitem from '../components/ticketitem'
export default {
name:'test',
components:{NavBarItem, ticketitem}
    
}
</script>

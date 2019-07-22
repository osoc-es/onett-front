<template>

<div>
  <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://www.metromadrid.es/sites/default/files/documentos/Home/Logo-100-A%C3%91OS-METRO.png" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body>
           <h4 class="title pt-1">{{name}}</h4> 
          <b-card-text>
            <p class="pt-2">Rides: {{rides}}</p>
          </b-card-text>
           <p class="">City: {{city}}, {{country}}</p>
          <b-card-text>
              <p class="">Price: {{price}}</p>
          </b-card-text>
           <b-card-text>
                <p class="">Way of transport: {{transport}}</p>
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</div>
    
    </div>

</template>



<style>

</style>

<script>
export default {
    name:'ticketitem',
    data(){
        return{
            name:String,
            price:Number,
            city:String,
            country:String,
            transport:String,
            rides:Number
        }

    },mounted(){
        this.name='10 rides pass';
        this.price = 10;
        this.city = 'Madrid';
        this.country = 'Spain';
        this.rides = 10;
        this.transport = 'Underground'
    }
}
</script>



<template>
    <div class="">
        <div class="p-2">
            <b-form-group label="Where are you?">
                <b-form-select id="citySelector" v-model="form.city" :options="cities"></b-form-select>
            </b-form-group>
        </div>
        <div class="p-2">
            <b-form-group label="How many travels will you take per day?"></b-form-group>
            <b-form-input type="number" v-model="form.travels"></b-form-input>
        </div>
        <div class="p-2">
            <b-form-group label="How old are you?">
                <b-form-input type="number" v-model="form.age"></b-form-input>
            </b-form-group>
        </div>
        <div class="p-2">
            <b-form-group label="Are you resident?">
                <b-radio-group>
                    <b-form-radio v-model="form.resident" value="1">Yes</b-form-radio>
                    <b-form-radio v-model="form.resident" value="0">No</b-form-radio>
                </b-radio-group>
            </b-form-group>
        </div>
        <div v-if="form.resident == ''">

        </div>
        <div v-else>
            <div v-if="form.resident == '0'">
                <div class="p-2">
                    <b-form-group label="How often are you going to use the transport?">
                        <div class="p-2">
                            <label for="">Arrival Date:</label>
                            <b-form-input type="date" v-model="form.arrivalDate"></b-form-input>
                        </div>
                        <div class="p-2">
                            <label for="">Departure Day:</label>
                            <b-form-input type="date" v-model="form.departureDate"></b-form-input>
                        </div>
                    </b-form-group>
                </div>
            </div>
            <div v-else>
                <div class="p-2">
                    <b-form-group label="How often are you going to use the transport?">
                        <b-form-radio-group v-model="form.residentUsage" :options="transportUse">
                        </b-form-radio-group>
                    </b-form-group>
                </div>
            </div>
        </div>
        <div class="p-2 text-right">
            <b-button class="outlineGradient outlineButton">Search</b-button>
        </div>
    </div>
</template>
<style>

</style>
<script>
export default {
    name:'fareform',
    data(){
        return{
            form:{
                'city':String,
                'resident':String,
                'residentUsage':String,
                'departureDate':String,
                'arrivalDate':String,
                "age":Number,
                "travels":Number
            },
            filterOptions:[
                {text:'Accesiblity', value:'accesibility'},
                {text:'Smokers', value:'smokers'},
                {text:'Kids', value:'kids'},
                {text:'Pets', value:'pets'},
                {text:'Trolley', value:'trolley'}
            ],
            cities:['Madrid', 'Barcelona', 'Paris', 'London', 'Berlin'],
            transportUse:[
                {text:'One Day', value:'1'},
                {text:'Couple Of Days', value:'2'},
                {text:'Every Day', value:'3'}
            ],
        }
    }, methods:{

    },
    mounted(){
        let dateOb = Date();
        /*let test  = new Date().toJSON().slice(0,10)
        console.log("Test: " + test)
        let time = dateOb.getHours().toString() + ":" + dateOb.getMinutes();
        let date = dateOb.getUTCFullYear().toString() + "-" + (dateOb.getUTCMonth + 1).toString() + "-" + dateOb.getDate().toString();*/
        this.form.resident="0"
        this.form.city="Madrid"
    }
}
</script>



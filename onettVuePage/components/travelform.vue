<template>
    <div class="">
        <div class="p-2">
            <b-form-input v-model="form.from" placeholder="From:"></b-form-input>
        </div>
        <div class="p-2">
            <b-form-input v-model="form.to" placeholder="To:"> </b-form-input>
        </div>
        <div class="p-2">
            <b-button  block variant="outline-info" v-b-modal.modal-filters>
                Filters
            </b-button>
            <b-modal id="modal-filters" centered title="Filters">
                <div class="">
                    <b-form-checkbox-group v-model="form.filters" :options="options"></b-form-checkbox-group>
                </div>
            </b-modal>
        </div>
        <div class="p-2">
            <b-button block variant="outline-info" v-b-modal.modal-schedule>
                Schedule your departure
            </b-button>
            <b-modal id="modal-schedule" centered title="Schedule">
                <div>
                    <div class="row">
                        <div class="col">
                            <b-form-input v-model="form.schedule.from.date" type="date"></b-form-input>
                        </div>
                        <div class="col">
                            <b-form-input v-model="form.schedule.from.time" type="time"></b-form-input>
                        </div>
                    </div>
                </div>
            </b-modal>
        </div>
        <div class="p-2 text-right">
            <b-button variant="outline-success" :click="logDate()">Search</b-button>
        </div>
    </div>
</template>
<style>

</style>
<script>
export default {
    name:'travelform',
    data(){
        return{
            form:{
                'from':String,
                'to':String,
                "filters":[],
                "schedule":{
                    "from":{
                        "time":"",
                        "date":"",
                    }
                }
            },
            options:[
                {text:'Accesiblity', value:'accesibility'},
                {text:'Smokers', value:'smokers'},
                {text:'Kids', value:'kids'},
                {text:'Pets', value:'pets'},
                {text:'Trolley', value:'trolley'}
            ]
        }
    }, methods:{
        logDate(){
            console.log(this.form.schedule.from.time)
        }
    },
    mounted(){
        let dateOb = Date();
        /*let test  = new Date().toJSON().slice(0,10)
        console.log("Test: " + test)
        let time = dateOb.getHours().toString() + ":" + dateOb.getMinutes();
        let date = dateOb.getUTCFullYear().toString() + "-" + (dateOb.getUTCMonth + 1).toString() + "-" + dateOb.getDate().toString();*/
        this.form.from="",
        this.form.to=""
        this.form.schedule.from.time="09:30";
        this.form.schedule.from.date="2019-12-01"
    }
}
</script>



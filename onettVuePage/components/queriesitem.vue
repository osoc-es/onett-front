<template>
    <div class="container-fluid">
        <div class="row">
        <div class="col-sm-12 col-md-4 col-lg-3 p-2" v-for="query in queries" :key="query.id">
            <b-card class="orangeBorder">
                <b-card-title class="raleway ">{{query.title}}</b-card-title>
                <b-card-text>{{query.description}}</b-card-text>
                <b-button v-on:click="getJson(query)" class=" outlineButton outlineGradient raleway">Display</b-button>
                <b-button class=" outlineButton outlineGradient raleway" v-on:click="showQuery()" v-b-modal="query.id">Show query</b-button>
            </b-card>
            <b-modal :id="query.id" centered size="lg">
                <template slot="modal-title">
                    <h4 class="raleway">{{query.title}}</h4>
                    </template>
                <p>{{query.description}}</p>
                <div class="overflow-auto">
                    <p class="pre-formatted"><code>{{query.query_value}}</code></p>
                </div>
                <template slot="modal-footer" slot-scope="{ ok, cancel, hide }">
                <a :href="query.html_link"><b-button class="outlineGradient outlineButton"> Try the Query</b-button></a>
                <b-button class="outlineGradient outlineButton" @click="hide('forget')">
                Close
                </b-button>
    </template>
            </b-modal>
        </div>
        </div>
        <div class="container-fluid mt-5" v-if="showData">
            <div>
                <h4 class="orangeText raleway">{{title}}</h4>
                <p>{{description}}</p>
            </div>
            <b-table striped bordered small responsive :items="items"></b-table>        
        </div>
    </div>
</template>
<style>

</style>
<script>
const  serverRequests   = require('../middleware/server-requests.service')
const axios = require('axios');
export default {
    name:'queriesitem',
    data(){
        return{
            queries:[], 
            jsonVars:[],
            data:null,
            items:[],
            showData:false
        }
    },methods:{
         getJson: async function(query){
             await serverRequests.sendQuery(query.json_link).then(async (data) => {
                this.data = await data;
            });
            this.items = [];
            this.jsonVars = this.data["head"]["vars"];
             this.data["results"]["bindings"].forEach(element => {
                 let item = {};
                 console.log(element)
                 this.jsonVars.forEach((varElement) => {
                     item[varElement] = element[varElement]["value"];
                 });
                 this.items.push(item);
            });
            this.title = query.title;
            this.description = query.description;
            this.showData = true;
            /*
            await fetch(link).then(function(response) {
                return response.json(); // As a function call
            }).then(function(data) {
                console.log(data);
            });*/
            },
        showQuery(){
            this.showData = false;
        }
    }, 
    mounted(){
        this.queries = [
            {
                title:'Display all the stops of the A zone',
                description:'These query shows all the subway stops included in the A zone.',
                html_link:'https://snap.summerofcode.es/sparql?default-graph-uri=http%3A%2F%2Flocalhost%3A8890%2Ftransporte&query=PREFIX+trm%3A+%3Chttps%3A%2F%2Fw3id.org%2Ftransmodel%2Fterms%23%3E%0D%0A%0D%0Aselect+*+where+%7B%0D%0A%0D%0A%23%3Ftrips++trm%3Astop+%3Fid_stop.%0D%0A%3Fid_stop+trm%3ATariffZoneRef+%3FZonaTarif.%0D%0A%3Fid_stop+trm%3AName++%3Fnombre+.%0D%0A%3Fid_stop+trm%3ALatitude+%3Flatitud.%0D%0A%3Fid_stop+trm%3ALongitud+%3Flongitud.%0D%0AFILTER%28%3FZonaTarif+%3D%22A%22%29%0D%0A%7D&format=text%2Fhtml&timeout=0&debug=on&run=+Run+Query+',
                json_link:'https://snap.summerofcode.es/sparql?default-graph-uri=http%3A%2F%2Flocalhost%3A8890%2Ftransporte&query=PREFIX+trm%3A+%3Chttps%3A%2F%2Fw3id.org%2Ftransmodel%2Fterms%23%3E%0D%0A%0D%0Aselect+*+where+%7B%0D%0A%0D%0A%23%3Ftrips++trm%3Astop+%3Fid_stop.%0D%0A%3Fid_stop+trm%3ATariffZoneRef+%3FZonaTarif.%0D%0A%3Fid_stop+trm%3AName++%3Fnombre+.%0D%0A%3Fid_stop+trm%3ALatitude+%3Flatitud.%0D%0A%3Fid_stop+trm%3ALongitud+%3Flongitud.%0D%0AFILTER%28%3FZonaTarif+%3D%22A%22%29%0D%0A%7D&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on&run=+Run+Query+',
                query_value:'PREFIX trm: <https://w3id.org/transmodel/terms#>\nselect * where {\n?id_stop trm:TariffZoneRef ?ZonaTarif.\n?id_stop trm:Name  ?nombre .\n?id_stop trm:Latitude ?latitud.\n?id_stop trm:Longitud ?longitud.\nFILTER(?ZonaTarif ="A")\n}',
                id:"query_0"
            },
                        {
                title:'Display all the stops of the line 10',
                description:'These query shows all the subway stops of the line 10.',
                html_link:'https://snap.summerofcode.es/sparql?default-graph-uri=http%3A%2F%2Flocalhost%3A8890%2Ftransporte&query=PREFIX+trm%3A+%3Chttps%3A%2F%2Fw3id.org%2Ftransmodel%2Fterms%23%3E%0D%0Aselect+*+where+%7B%0D%0A%3Fstop_uri+trm%3AName+%3Fstop_name.%0D%0AFILTER%28regex%28str%28%3Fstop_uri%29%2C+%22par_4_%28%5B1%5D%5B8-9%5D%5B7-9%5D%7C%5B1%5D%5B9%5D%5B0-9%5D%7C%5B2%5D%5B0%5D%5B0-5%5D%29%24%22%29%29%0D%0A%7D%0D%0A&format=text%2Fhtml&timeout=0&debug=on&run=+Run+Query+',
                json_link:'https://snap.summerofcode.es/sparql?default-graph-uri=http%3A%2F%2Flocalhost%3A8890%2Ftransporte&query=PREFIX+trm%3A+%3Chttps%3A%2F%2Fw3id.org%2Ftransmodel%2Fterms%23%3E%0D%0Aselect+*+where+%7B%0D%0A%3Fstop_uri+trm%3AName+%3Fstop_name.%0D%0AFILTER%28regex%28str%28%3Fstop_uri%29%2C+%22par_4_%28%5B1%5D%5B8-9%5D%5B7-9%5D%7C%5B1%5D%5B9%5D%5B0-9%5D%7C%5B2%5D%5B0%5D%5B0-5%5D%29%24%22%29%29%0D%0A%7D%0D%0A&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on&run=+Run+Query+',
                query_value:'PREFIX trm: <https://w3id.org/transmodel/terms#>\nselect * where {\n?stop_uri trm:Name ?stop_name.\nFILTER(regex(str(?stop_uri), "par_4_([1][8-9][7-9]|[1][9][0-9]|[2][0][0-5])$"))\n}',
                id:"query_1"
            },
                        {
                title:'Display the stop Fuencarral',
                description:'These query shows the description of Tribunal\'s stop\'s exit, Fuencarral.',
                html_link:'https://snap.summerofcode.es/sparql?default-graph-uri=http%3A%2F%2Flocalhost%3A8890%2Ftransporte&query=select+*where+%7B%3Chttps%3A%2F%2Fw3id.org%2Ftransmodel%2Fresource%2FSpain%2FMadrid%2Ftren%2Facc_4_10_35%3E+%3Fp+%3Fo%7D+LIMIT+1000&format=text%2Fhtml&timeout=0&debug=on&run=+Run+Query+',
                json_link:'https://snap.summerofcode.es/sparql?default-graph-uri=http%3A%2F%2Flocalhost%3A8890%2Ftransporte&query=select+*where+%7B%3Chttps%3A%2F%2Fw3id.org%2Ftransmodel%2Fresource%2FSpain%2FMadrid%2Ftren%2Facc_4_10_35%3E+%3Fp+%3Fo%7D+LIMIT+1000&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on&run=+Run+Query+',
                query_value:'PREFIX trm: <https://w3id.org/transmodel/terms#>\nselect * where\n{\n<https://w3id.org/transmodel/resource/Spain/Madrid/tren/acc_4_10_35> ?p ?o\n}',
                id:"query_2"
            },
                                    {
                title:'Display all the lines of Madrid',
                description:'These query show all the subway stops of Madrid.',
                html_link:'https://snap.summerofcode.es/sparql?default-graph-uri=http%3A%2F%2Flocalhost%3A8890%2Ftransporte&query=PREFIX+trm%3A+%3Chttps%3A%2F%2Fw3id.org%2Ftransmodel%2Fterms%23%3E%0D%0Aselect+*+where+%7B%0D%0A%3Fstop_uri+trm%3AName+%3FStop_name.%0D%0A%3Fstop_uri+trm%3ADescription+%3FStop_address.%0D%0A%0D%0AFILTER%28contains%28str%28%3Fstop_uri%29%2C+%22par%22%29%29%0D%0A%7D%0D%0A&format=text%2Fhtml&timeout=0&debug=on&run=+Run+Query+',
                json_link:'https://snap.summerofcode.es/sparql?default-graph-uri=http%3A%2F%2Flocalhost%3A8890%2Ftransporte&query=PREFIX+trm%3A+%3Chttps%3A%2F%2Fw3id.org%2Ftransmodel%2Fterms%23%3E%0D%0Aselect+*+where+%7B%0D%0A%3Fstop_uri+trm%3AName+%3FStop_name.%0D%0A%3Fstop_uri+trm%3ADescription+%3FStop_address.%0D%0A%0D%0AFILTER%28contains%28str%28%3Fstop_uri%29%2C+%22par%22%29%29%0D%0A%7D%0D%0A&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on&run=+Run+Query+',
                query_value:'PREFIX trm: <https://w3id.org/transmodel/terms#>\nselect * where {\n?stop_uri trm:Name ?Stop_name.\n?stop_uri trm:Description ?Stop_address.\nFILTER(contains(str(?stop_uri), "par"))\n}',
                id:"query_3"
            }
        ]
    }   
}
</script>



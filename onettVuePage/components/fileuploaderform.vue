<template>
  <div class="">
    <h1 class="raleway pt-2 pb-2">GTFS FILE UPLOADER</h1>
    <div class="pb-2">
    <b-form-input
    v-model="form.country"
    placeholder="Introduce your country."
    >
    </b-form-input>
    </div>
    <div class="pb-2">
    <b-form-input
    v-model="form.city"
    placeholder="Introduce your city."
    >
    </b-form-input>
    </div>
    <div class="pb-2">
    <b-form-input
    v-model="form.agency"
    placeholder="Introduce your agency."
    >
    </b-form-input>      
    </div>
    <div class="pb-2">
    <b-form-file
      v-model="form.file"
      placeholder="Choose a file..."
      drop-placeholder="Drop file here..."
    ></b-form-file>      
    </div>
    <div class="pb-2 text-right">
      <button class=" btn btn-outline-dark raleway" :onclick="upload()">UPLOAD</button>
    </div>
    <div v-if="!correct" class="alert alert-danger">The file is not uploaded.</div>
    <div v-else class="alert alert-success">File succesfully uploaded.</div>
  </div>
</template>
<style>

</style>
<script>
const  serverRequests   = require('../middleware/server-requests.service')
export default {
    name:'fileuploaderform',
    data(){
      return {
        form:{
          file:null,
          country:'',
          city:'',
          agency:'',
          filename:'',
        },
        correct:Boolean,
      }
    },
    methods: {
      upload(){
        if(this.form.file && !this.correct){
          console.log(this.form.file)
          let DateString = new Date();
          let currentDate = DateString.getDate() + "" + DateString.getMonth()  +  "" + DateString.getFullYear() + "" + DateString.getHours() + "" + DateString.getMinutes();
          this.form.filename = this.form.agency + "_" + this.form.city + "_" + this.form.country + "_"  + currentDate + ".zip" ;
          this.correct = serverRequests.uploadFile(this.form);
        }
      }
    }, 
    mounted(){
      this.form.country = "Spain";
      this.form.city = "Madird";
      this.form.agency = "CTRM";
      this.correct = false;
    }

}
</script>


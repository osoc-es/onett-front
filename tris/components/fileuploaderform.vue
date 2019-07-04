<template>
     <div>
    <b-form-input
    v-model="form.country"
    :state="Boolean(form.country)"
    placeholder="Introduce your country."
    >
    </b-form-input>
    <b-form-input
    v-model="form.city"
    :state="Boolean(form.city)"
    placeholder="Introduce your city."
    >
    </b-form-input>
    <b-form-input
    v-model="form.agency"
    :state="Boolean(form.agency)"
    placeholder="Introduce your agency."
    >
    </b-form-input>
    <b-form-file
      v-model="form.file"
      :state="Boolean(form.file)"
      placeholder="Choose a file..."
      drop-placeholder="Drop file here..."
    ></b-form-file>
    <b-button :onclick="upload()">SEND</b-button>
    <div class="mt-3">Selected file: {{ form.file ? form.file.name : '' }}</div>
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
      }
    },
    methods: {
      upload(){
        if(this.form.file){
          console.log(this.form.file)
          this.form.filename = this.form.agency + "." + this.form.city + "." + this.form.country;
          serverRequests.uploadFile(this.form);
        }
      }
    }, 
    mounted(){
      this.form.country = "Spain";
      this.form.city = "Madird";
      this.form.agency = "CTRM";
    }

}
</script>


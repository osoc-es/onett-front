<template>
     <div>
    <b-form-file
      v-model="file"
      :state="Boolean(file)"
      placeholder="Choose a file..."
      drop-placeholder="Drop file here..."
    ></b-form-file>
    <b-button :onclick="upload()">SEND</b-button>
    <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>
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
        file: null,
      }
    },
    methods: {
      upload(){
        if(this.file){
          serverRequests.uploadFile(this.file.name);
        }
      }
    }, 
    mounted(){
    }

}
</script>


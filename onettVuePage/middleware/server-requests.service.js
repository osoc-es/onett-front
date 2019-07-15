const axios  = require('axios');
const serverURL = 'http://localhost:3333/';
 export async function uploadFile(form) {
    let uploaded = false
    let yarrrml = '';
    let bodyFormData = new FormData();
    bodyFormData.set('country', form.country);
    bodyFormData.set('city', form.city);
    bodyFormData.set('agency', form.agency);
    bodyFormData.set('filename', form.filename);
    bodyFormData.set('transport', form.transport);
    bodyFormData.append('file', form.file, form.filename);
    console.log(bodyFormData + "");
    await axios.post(`${serverURL}upload/file`, bodyFormData,{ headers: {'Content-Type': 'multipart/form-data' }}
    ).then( async response =>{
      console.log(response.data)
      uploaded = await response.status == 200
      yarrrml = await response.data.yarrrml;
    }
    );
    console.log("Subimos un archivo?" + uploaded);
    console.log(message);
    return uploaded;
}

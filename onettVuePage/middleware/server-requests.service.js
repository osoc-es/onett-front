const axios  = require('axios');
const serverURL = 'http://localhost:3333/';
 export async function uploadFile(form) {
    let uploaded = false
    let bodyFormData = new FormData();
    bodyFormData.set('country', form.country);
    bodyFormData.set('city', form.city);
    bodyFormData.set('agency', form.agency);
    bodyFormData.append('file', form.file, form.filename);
    console.log(bodyFormData + "");
    await axios.post(`${serverURL}upload/file`, bodyFormData,{ headers: {'Content-Type': 'multipart/form-data' }}
    ).then( response =>{
      console.log(response.data)
      uploaded = response.status == 200

    }
    );
    console.log("Subimos un archivo?" + uploaded);
    return uploaded;
}

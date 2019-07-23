const axios  = require('axios');
const serverURL = 'http://localhost:3333';
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
    await axios.post(`${serverURL}`, bodyFormData,{ headers: {'Content-Type': 'multipart/form-data' }}
    ).then( async response =>{
      let url = window.URL.createObjectURL(new Blob([response.data]));
      let link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', form.filename + '.tl'); //or any other extension
      document.body.appendChild(link);
      link.click();
      uploaded = await response.status == 200
      console.log(response.data)
    }
    );
    console.log("Subimos un archivo?" + uploaded);
    console.log(message);
    return uploaded;
}

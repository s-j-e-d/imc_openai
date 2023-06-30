// fetch-kobo-data.js
const fs = require('fs');
const axios = require('axios');

const token = process.env.KOBO_TOKEN;  // Environment variable for your token

axios.get('https://kobo.humanitarianresponse.info/api/v2/assets/aCuJ5p5ekgWJXRZGNs3j5Q/export-settings/escHgbQm4kqHUF5cjcX2CN2/data.xlsx', {
    headers: {
      'Authorization': `Token ${token}`
    }
  })
  .then(response => {
    fs.writeFileSync('data.json', JSON.stringify(response.data));
  })
  .catch(error => {
    console.error(error);
  });

// fetch-kobo-data.js
const fs = require('fs');
const axios = require('axios');

const token = process.env.KOBO_TOKEN;  // Environment variable for your token

axios.get('https://your-kobo-api-endpoint', {
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

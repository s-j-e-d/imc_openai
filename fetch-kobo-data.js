// fetch-kobo-data.js
const fs = require('fs');
const axios = require('axios');
const XLSX = require('xlsx');

const token = process.env.KOBO_TOKEN;  // Environment variable for your token

axios({
    url: 'https://kobo.humanitarianresponse.info/api/v2/assets/aCuJ5p5ekgWJXRZGNs3j5Q/export-settings/escHgbQm4kqHUF5cjcX2CN2/data.xlsx',
    method: 'GET',
    responseType: 'arraybuffer', // Important for binary files
    headers: {
      'Authorization': `Token ${token}`,
      'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    },
  })
  .then(response => {
    const workbook = XLSX.read(response.data, {type: 'buffer'});
    const sheetNameList = workbook.SheetNames;
    const json = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNameList[0]]);
    fs.writeFileSync('data.json', JSON.stringify(json));
  })
  .catch(error => {
    console.error(error);
  });

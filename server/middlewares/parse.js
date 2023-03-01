/* eslint-disable import/no-extraneous-dependencies */
const XLSX = require('xlsx');

const parse = (filename) => {
  const excelData = XLSX.readFile(`./products/${filename}`);

  return Object.keys(excelData.Sheets).map((name) => ({
    name,
    data: XLSX.utils.sheet_to_json(excelData.Sheets[name]),
  }));
};

// parse('../products/book1.xlsx').forEach((el) => {
//   console.log(el.data);
// });

module.exports = parse;

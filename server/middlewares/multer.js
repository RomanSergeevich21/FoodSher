/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
const multer = require('multer');

const path = require('path');

// console.log('fghjkljhy');
const storage = multer.diskStorage({
  destination(req, file, cb) {
    // console.log(file);
    cb(null, path.resolve(__dirname, '../products'));
  },
  filename(req, file, cb) {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  },
});

const upload = multer({ storage });

module.exports = upload;

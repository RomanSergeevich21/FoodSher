const express = require('express');
const { dirname } = require('path');
const path = require('path');

const apiSaveRouter = express.Router();

apiSaveRouter.get('/:file', async (req, res) => {
  const { file } = req.params;
  const fileLocation = await path.join(__dirname, '../products', file);
  console.log(fileLocation);
  res.sendFile(fileLocation, file);
});

module.exports = apiSaveRouter;

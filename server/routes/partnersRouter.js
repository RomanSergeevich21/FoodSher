const express = require('express');
const { User } = require('../db/models');

const partnersRouter = express.Router();

partnersRouter.get('/', async (req, res) => {
  try {
    const partners = await User.findAll({
      where: {
        roleid: 3,
      },
    });
    res.json(partners);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

partnersRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const partner = await User.findOne({ where: { id } });
    res.json(partner);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = partnersRouter;

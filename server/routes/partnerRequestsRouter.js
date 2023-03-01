const express = require('express');
const { Request, User } = require('../db/models');

const partnerRequestsRouter = express.Router();

partnerRequestsRouter.get('/actives', async (req, res) => {
  try {
    console.log('tututuututuut');
    const partnerActRequests = await Request.findAll({
      where: { partnerid: req.session.user.id, statusid: 2 },
      include: User,
    });
    res.json(partnerActRequests);
  } catch (error) {
    res.sendStatus(500);
  }
});
partnerRequestsRouter.get('/unactives', async (req, res) => {
  try {
    const partnerUnactRequests = await Request.findAll({
      where: { partnerid: req.session.user.id, statusid: 3 },
      include: User,
    });
    res.json(partnerUnactRequests);
  } catch (error) {
    res.sendStatus(500);
  }
});
partnerRequestsRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Request.destroy({
      where: { id },
    });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});
partnerRequestsRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, lifeTimeStart, lifeTimeEnd, description, statusid } = req.body;
    const editRequest = await Request.findOne({ where: { id } });
    editRequest.title = title;
    editRequest.lifeTimeEnd = lifeTimeEnd;
    editRequest.lifeTimeStart = lifeTimeStart;
    editRequest.description = description;
    editRequest.statusid = statusid;
    await editRequest.save();
    res.json(editRequest);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = partnerRequestsRouter;

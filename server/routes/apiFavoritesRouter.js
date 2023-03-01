const express = require('express');
// const { Op, Sequelize } = require('sequelize');
const { Request, User, Favorite } = require('../db/models');

const apiFavoritesRouter = express.Router();

apiFavoritesRouter.route('/').get(async (req, res) => {
  try {
    const id = req.session?.user?.id;
    if (id) {
      const allFavoriteRequests = await User.findOne({
        where: { id },
        attributes: ['id'],
        include: {
          model: Request,
          include: {
            model: User,
            attributes: ['companyName'],
          },
        },
      });
      console.log(JSON.parse(JSON.stringify(allFavoriteRequests)));
      // console.log(JSON.parse(JSON.stringify(allFavoriteRequests)));
      return res.json(allFavoriteRequests);
    }
    return res.sendStatus(401);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

apiFavoritesRouter.post('/:id', async (req, res) => {
  try {
    const requestid = req.params.id;
    const userid = req.session?.user?.id;

    if (userid) {
      await Favorite.create({ userid, requestid });
      return res.sendStatus(200);
    }
    return res.sendStatus(401);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

apiFavoritesRouter.delete('/:id', async (req, res) => {
  try {
    const requestid = req.params.id;
    const userid = req.session?.user?.id;

    await Favorite.destroy({
      where: {
        requestid,
        userid,
      },
    });

    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

module.exports = apiFavoritesRouter;

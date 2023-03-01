const express = require('express');
const { Op, Sequelize } = require('sequelize');
const { Request, Product, User, Category } = require('../db/models');

const searchRequestRouter = express.Router();

searchRequestRouter
  .route('/')
  .get(async (req, res) => {
    try {
      // console.log('AAAAAAAAAAAAAAAAAAAAAAAA');
      const allRequests = await Request.findAll({
        order: [['createdAt', 'DESC']],
        include: [
          {
            model: User,
            attributes: ['id', 'companyName'],
          },
          // {
          //   model: Product,
          //   attributes: ['id'],
          //   include: {
          //     model: Category,
          //     attributes: ['id', 'title'],
          //   },
          // },
        ],
      });

      res.json(allRequests);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  })
  .post(async (req, res) => {
    try {
      const { input } = req.body;

      const foundRequests = await Request.findAll({
        where: {
          statusid: {
            [Op.ne]: 3,
          },
        },
        include: [
          {
            model: User,
            attributes: ['id', 'companyName', 'titleLogoPath'],
          },
          {
            model: Product,
            attributes: ['title'],

            where: {
              [Op.or]: [
                {
                  title: {
                    [Op.iLike]: `%${input}%`,
                  },
                },
                {
                  title: {
                    [Op.substring]: input,
                  },
                },
              ],
            },
            include: {
              model: Category,
              attributes: ['id', 'title'],
            },
          },
        ],
      });
      // console.log(JSON.parse(JSON.stringify(foundRequests)));
      res.json(foundRequests);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }

    // const resa = foundRequest({ title: { [Op.substring]: input } });
  });

searchRequestRouter.route('/filter').post(async (req, res) => {
  try {
    const { input } = req.body;
    let foundRequests;

    // console.log(input);

    if (input !== '') {
      const arr = input.split(',');

      const foundIdRequests = await Product.findAll({
        attributes: ['requestid'],
        include: {
          model: Category,
          where: {
            title: {
              [Op.in]: arr,
            },
          },
          attributes: [],
        },
      });

      const idReq = foundIdRequests.map((reqId) => reqId.requestid);

      foundRequests = await Request.findAll({
        where: {
          id: {
            [Op.in]: idReq,
          },
        },
        include: [
          {
            model: User,
            attributes: ['id', 'companyName', 'titleLogoPath'],
          },
          {
            model: Product,
            attributes: ['title'],

            include: {
              model: Category,
              attributes: ['id', 'title'],
            },
          },
        ],
      });
    } else {
      foundRequests = await Request.findAll({
        include: [
          {
            model: User,
            attributes: ['id', 'companyName', 'titleLogoPath'],
          },
          {
            model: Product,
            attributes: ['title'],

            include: {
              model: Category,
              attributes: ['id', 'title'],
            },
          },
        ],
      });
    }

    // console.log(foundRequests);

    console.log(JSON.parse(JSON.stringify(foundRequests)));
    res.json(foundRequests);
    // res.json([]);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

searchRequestRouter.route('/filter-partners').post(async (req, res) => {
  try {
    const { input } = req.body;

    const data = input.split('|');
    const idsArr = data[0].split(',');
    const partners = data[1].split(',');

    // console.log();
    // let foundRequests;

    const foundRequests = await Request.findAll({
      where: {
        id: {
          [Op.in]: idsArr,
        },
      },
      include: [
        {
          model: User,
          attributes: ['id', 'companyName', 'titleLogoPath'],
          where: {
            companyName: {
              [Op.in]: partners,
            },
          },
        },
        {
          model: Product,
          attributes: ['title'],

          include: {
            model: Category,
            attributes: ['id', 'title'],
          },
        },
      ],
    });

    console.log(JSON.parse(JSON.stringify(foundRequests)));
    res.json(foundRequests);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = searchRequestRouter;

const express = require('express');
const { Request, User, Favorite, Comment } = require('../db/models');

const commentsRouter = express.Router();

commentsRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const comments = await User.findAll({
      where: { id },
      include: 'UserComments',
      });
    const prettyComments = JSON.parse(JSON.stringify(comments[0]));
    const commentsArr = prettyComments.UserComments;
    const authorIdArr = prettyComments.UserComments.map((el) => el.authorid);
    const normalDataArr = [];
    for (let i = 0; i < authorIdArr.length; i += 1) {
      const realAuthor = await User.findOne({ where: { id: authorIdArr[i] } });
      // console.log('skdfsdbfsbfksdnf', realAuthor)
      normalDataArr.push({
        ...commentsArr[i],
        firstName: realAuthor.firstName,
        secondName: realAuthor.secondName,
        lastName: realAuthor.lastName,
        pathPhoto: realAuthor.pathPhoto,
      });
    }
    // console.log(normalDataArr);
    const readableDataArr = normalDataArr.reverse()
    res.json(readableDataArr);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

commentsRouter.post('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { body, authorid } = req.body;
    console.log(body, authorid);
    const comment = await Comment.create({ authorid, body, userid: id });
    const prettyComment = JSON.parse(JSON.stringify(comment));
    res.json(prettyComment);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = commentsRouter;

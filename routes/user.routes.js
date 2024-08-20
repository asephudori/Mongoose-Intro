const Router = require('express');
const { addUsers, findAllusers } = require('../controllers/user.controllers');

const userRouter = Router();

userRouter.post('/create', addUsers);
userRouter.get('/user', findAllusers);

module.exports = userRouter;

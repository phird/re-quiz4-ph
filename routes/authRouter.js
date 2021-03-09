const router = require('express').Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {

    const user = new User(
    { username , password, firstname, lastname, balance } = req.body
    );
    try{
        const savedUser = await user.save();
        res.send(savedUser);
    }catch(err){
        res.status(400).send(err);
    }
     
  });

/// VALIDATION
// const Joi = require('@hapi/joi');
// const schema = {
//     username: Joi.string().required(),
//     password: Joi.string().required(),
//     firstname: Joi.string().require(),
//     lastname: Joi.string().required(),
//     balance: Joi.number().required()
// }


router.post('/login',
  (req, res) => {
    const { username, password } = req.body
    // Use username and password to create token.
    jwt.sign({username: username}, 'SIMPLE_SECRET', () => {
      res.status(200).json({
        message: 'Login succesfully',
      })
    })
     
  })


  module.exports = router ;


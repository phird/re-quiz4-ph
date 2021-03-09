import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { body, query, validationResult } from 'express-validator'
import dotenv from 'dotenv'
import mongoose from 'mongoose'



dotenv.config();
/// connect to DB
mongoose.connect('mongodb+srv://phird:phird@cluster0.szf1p.mongodb.net/myFirstDatabase?retryWrites=true', { useNewUrlParser: true }, () => 
console.log('connected to DB ! '));

const app = express()
app.use(bodyParser.json())
app.use(cors())
const PORT = process.env.PORT || 3000
const SECRET = "SIMPLE_SECRET"
const authRoute = require('./routes/authRouter.js');

interface JWTPayload {
  username: string;
  password: string;
}

// Middleeware
app.use(express.json());
// route muddle
app.use('/api/users',authRoute);



app.get('/balance',
  (req, res) => {
    const token = req.query.token as string
    try {
      const { username } = jwt.verify(token, SECRET) as JWTPayload
  
    }
    catch (e) {
      //response in case of invalid token
    }
  })

app.post('/deposit',
  body('amount').isInt({ min: 1 }),
  (req, res) => {

    //Is amount <= 0 ?
    if (!validationResult(req).isEmpty())
      return res.status(400).json({ message: "Invalid data" })
  })

app.post('/withdraw',
  (req, res) => {
  })

app.delete('/reset', (req, res) => {

  //code your database reset here
  
  return res.status(200).json({
    message: 'Reset database successfully'
  })
})

app.get('/me', (req, res) => {
 
})

app.get('/demo', (req, res) => {
  return res.status(200).json({
    message: 'This message is returned from demo route.'
  })
})

app.listen(PORT, () => console.log(`Server is running at ${PORT}`))
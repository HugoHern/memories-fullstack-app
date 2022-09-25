/*                   DEPENDENCIES                   */
const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

/*                   INITIALZING                */
const app = express()

/*                  MIDDDLEWARE                  */
app.use(bodyparser.json({limit: '30mb', extended: true}))
app.use(bodyparser.urlencoded({limit: '30mb', extended: true}))
app.use(cors())

/*                 MONGODB              */
const CONNECTION_URL = process.env.MONGO_URI
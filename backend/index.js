/*                   DEPENDENCIES                   */
const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require("dotenv");

/*                   INITIALZING                */
const app = express()

/*                  MIDDDLEWARE                  */
app.use(bodyparser.json({limit: '30mb', extended: true}))
app.use(bodyparser.urlencoded({limit: '30mb', extended: true}))
app.use(cors())
dotenv.config()

/*                PORT          */
const PORT = process.env.port || 5000

/*                 MONGODB              */
const connectDB =  async ()=> {

    try{
        await mongoose.connect("mongodb+srv://admin1:C87g0sfC2bDqIjYn@cluster0.f5j2chl.mongodb.net/?retryWrites=true&w=majority")
        console.log(`mongo database is connected!!! `)
    }catch(error){
        console.error(`Error: ${error} `)
    
    }

}

connectDB()



app.listen(PORT, () => console.log('server is running!'))

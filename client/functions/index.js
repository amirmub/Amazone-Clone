const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { setGlobalOptions } = require("firebase-functions");

dotenv.config();//uses for READ inside .env file
const stripe = require("stripe") (process.env.STRIPE_SECRET_KEY);

const app = express()

setGlobalOptions({maxInstances : 10})
app.use(cors({origin : true})) //uses for accept from any request

app.use(express.json())

app.get("/",(req,res) =>{
    res.status(200).json({message : "successfully register to function"})
})


app.post("/payment/create",async(req,res) =>{
    const total = parseInt(req.query.total)

      if (total > 0) {
        const paymentIntent = await stripe.paymentIntents.create({
            amount : total * 100,
            currency : "USD"
         })
         res.status(201).json({
            clientSecret : paymentIntent.client_secret,
         })
         console.log(paymentIntent);
      }
        else{
           res.status(403).json({
            message : "total must be greater than 0"
           })

        }
    })

exports.api = onRequest(app)
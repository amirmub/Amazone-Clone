const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();//uses for READ inside .env file
const stripe = require("stripe") (process.env.STRIPE_SECRET_KEY);

const app = express()
app.use(cors({origin : true})) //uses for accept from any request

app.use(express.json())

app.get("/",(req,res) =>{
    res.status(200).json({message : "successfully register"})
})


app.post("/payment/create",async(req,res) =>{
    const total = req.query.total

      if (total > 0) {
        const paymentIntent = await stripe.paymentIntents.create({
            amount : total,
            currency : "USD"
         })
         res.status(201).json({
            clientSecret : paymentIntent.client_secret,
         })
         console.log(paymentIntent);
      }
        else{
           res.status(403).json({
            message : "total must be greatethan 0"
           })

        }
    })

    app.listen(5000,(err)=>{
       if (err){ console.log(err);
        err }
       console.log("it's listining PORT : 5000,http://localhost:5000");
    })
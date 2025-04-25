const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const stripe = require("stripe") (process.env.STRIPE_SECRET_KEY)
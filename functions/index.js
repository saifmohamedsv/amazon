const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");

const stripe = require("stripe")("sk_test_51LHoCuCajsSYQy" +
    "t67grT3g33gUGpf5fLLAtD0xHQN" +
    "T2WLFvaxgYSNgIpgsndNauV4tzRCzIGCUwtLzpG0l14mAE" +
    "U00FAaS0djH");

// API

// - App config
const app = express();


// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());
// - API route
app.get("/", (req, res) => {
    res.status(200).send("Hello");
});

app.post("/payment/create", async (req, res) => {
    const total = req.query.total;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // in subunits
        currency: 'egp' // currencies
    })
    res.status(201).send({clientSecret: paymentIntent.client_secret})
});

// - Listen command
exports.api = functions.https.onRequest(app);
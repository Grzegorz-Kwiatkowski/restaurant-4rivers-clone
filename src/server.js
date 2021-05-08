const express = require("express");
const app = express();
require("dotenv").config();
const stripe = require("stripe")("sk_test_51Hr3ALHek55xmiJpdBy1Modh5Y3SQB0vuS5eW7SDIFPMsDcUZdxfrbuKh9WYK3BlsXJ2LxUMs9l4gby62AGnFpx300UNjgA5pn");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname + '/src'));

var port = process.env.PORT || 8080;

app.post("/stripe/charge", cors(), async (req, res) => {
    console.log("stripe-routes.js 9 | route reached", req.body);
    let { amount, id } = req.body;
    console.log("stripe-routes.js 10 | amount and id", amount, id);
    try {
        const payment = await stripe.paymentIntents.create({
            amount: amount,
            currency: "USD",
            description: "Your Company Description",
            payment_method: id,
            confirm: true,
        });
        console.log("stripe-routes.js 19 | payment", payment);
        res.json({
            message: "Payment Successful",
            success: true,
        });
    } catch (error) {
        console.log("stripe-routes.js 17 | error", error);
        res.json({
            message: "Payment Failed",
            success: false,
        });
    }
});




app.use(express.static(path.join(__dirname, '../build')));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../build')));
    app.get('*', (req, res) => {
        res.sendfile(path.join(__dirname = '../build/index.html'));
    })
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '../build/index.html'));
})



app.listen(port, function () {
    console.log('Our app is running on http://localhost:' + port);
});
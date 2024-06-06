const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const userRoute = require("./routes/routes.js")
const app = express();

app.use(express.json());
app.use(cors());



app.use('/api/v1',userRoute);

exports.app = functions.https.onRequest(app);
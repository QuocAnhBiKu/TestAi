const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const userRoute = require("./routes/routes.js")

const app = express();

app.use(express.json());
app.use(cors());



app.use('/api/v1',userRoute);
app.listen(5000,()=>console.log('listening on port 5000'));

exports.app = functions.https.onRequest(app);
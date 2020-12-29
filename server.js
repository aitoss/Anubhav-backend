const express = require('express')
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean')
const dotenv = require('dotenv')
const cors = require('cors');
const hpp = require('hpp');
const fileUpload = require('express-fileupload');
const rateLimit = require('express-rate-limit');
const path = require('path');

const app = express();

// Body Parser
app.use(express.json());
// sanitize Data
app.use(mongoSanitize());
// xss-clean
app.use(xss());
//rate-limit
const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minutes
    max: 10000, // limit each IP to 1000 requests per windowMs
});
app.use(limiter);
// hpp
app.use(hpp());
// cors
app.use(cors());
app.options('*', cors());
// file Upload
app.use(fileUpload());



const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));


module.exports = app;

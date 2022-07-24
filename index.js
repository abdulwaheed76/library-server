const express = require('express');
const router = require('./routes');
var cors = require('cors')
const {studentRouter} = require('./routes/index')
const app = express();

// var allowlist = [
//     'http://localhost:3000/',
// ]
// var corsOptionsDelegate = function (req, callback) {
//     var corsOptions;
//     if (allowlist.indexOf(req.header('Origin')) !== -1) {
//         corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
//     } else {
//         corsOptions = { origin: false } // disable CORS for this request
//     }
//     callback(null, corsOptions) // callback expects two parameters: error and options
// }

// app.use(cors(corsOptionsDelegate))
app.use(express.json());
app.use(router);

app.listen(8080, () => console.log('server listening on port 8080'));


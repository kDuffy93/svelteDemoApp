let express = require('express');
var router = express.Router();
let axios = require ('axios');

router.get('/', (req, res) => {  res.send({
    success: true,
    data: []
})
console.log('heatMapPage');
});


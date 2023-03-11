let express = require('express');
var router = express.Router();
let axios = require ('axios');

router.get('/', (req, res) => {
    console.log(`Searching for a gif with the term: ${req.query.term}`);

    let params = req.query.term.replace(/ /g, '+');
    console.log(params);
    params += '&api_key=5Bdp0z2z28aSDNkcbuqPQAsMXZBoXIXj';
    params += '&limit=10';

    axios.get(`https://api.giphy.com/v1/gifs/search?q=${params}`)
        .then(function (response) {
            res.send({
                success: true,
                data: response.data.data
            })

        })
        .catch(function (error) {
            res.send({
                success: false,
                data: []
            })
        });
});

module.exports = router;
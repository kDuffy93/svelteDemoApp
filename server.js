const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const path = require('path');
const axios = require('axios');


// router imports
let giphy = require('./routes/giphy')
let mainRoutes = require('./routes/mainRoutes')
let login = require('./routes/login')
let rentalData = require('./routes/rentalData')
let heatMap = require('./routes/heatMap')

app.use(cors());

app.use('/giphy', giphy);
/* app.use('/', mainRoutes);
app.use('/login', login);
app.use('/rentalData', rentalData);
app.use('/heatMap', heatMap); */


app.use(express.static('public'));
app.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});


app.listen(port, () => {
    console.log(`Server is up at port ${port}`);
});
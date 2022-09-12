require('./db/connection')();
const express = require('express');
require('dotenv').config();
const chefs = require('./routes/chefs');
const resturants = require('./routes/resturants');
const dishes = require('./routes/dishes');
const app = express();  
const port = process.env.PORT; 
var cors = require('cors')

app.use(cors())
app.use('/chefs', chefs);
app.use('/resturants', resturants);
app.use('/dishes', dishes);
app.get('/', (req, res) => {        
    res.sendFile('index.html', {root: __dirname});                                                             
});

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});
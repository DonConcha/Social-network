const express = require('express');
const routes = requires('./routes');
const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const cwd = process.cwd();

app.use(express.urlencoded({extended: true }));
app.use(express.json());
app.use(routes); 

db.once('open', () => {
    app.listen(PORT, () => { 
        console.log('Api server running on port ${PORT!');
        console.log('cwd: ${cwd}');
    });
});
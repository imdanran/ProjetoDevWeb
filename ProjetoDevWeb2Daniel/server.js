const app = require('./app');
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

require('dotenv').config({path:'variables.env'});

app.set('port', process.env.PORT);
const server = app.listen(app.get('port'), () => {
    console.log("Servidor rodando na porta: "+server.address().port);
}); 
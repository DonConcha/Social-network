const { connect, connection } = require('mongoose');

const connectString = 'mongodb://localhost:27017/NoSQL';

connect(connectString,);

module.exports = connection;
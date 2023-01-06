const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let isConnected;

module.exports = connectToDatabase = () => {
  console.log('database connection ' + isConnected);
  if (isConnected) {
    console.log('=> using existing database connection');
    return Promise.resolve();
  }
  return mongoose.connect(process.env.DB)
    .then(
      db => { 
        console.log('=> using new database connection <=');
        console.log("dataNase ", db.connections[0]._readyState);
        isConnected = db.connections[0]._readyState;
      }
    );
};
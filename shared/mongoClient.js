const { MongoClient } = require('mongodb');
const config = {
  url: 'URL_DATABASE'
};

module.exports = () => new Promise((resolve, reject) => {
  MongoClient
  .connect(config.url, { useNewUrlParser: true, useUnifiedTopology: true}, (err, mongoConnection) => {
    if (err) {
      reject(err);
    } else {
      resolve({
        client: mongoConnection.db(config.dbName),
        closeConnectionFn: () => setTimeout(() => {
          mongoConnection.close();
        }, 1000),
        mongoConnection,
      })
    }
  })
})
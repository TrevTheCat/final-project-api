var MongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost/worldBook'


module.exports = {
  'secret': 'jsonwebtokensaregreat',
  'database' :  MongoUri
};
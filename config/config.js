var MongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost/worldBook'


module.exports = {
  'secret': process.env.SECRET,
  'database' :  MongoUri
};
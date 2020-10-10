let Cloudant = require('@cloudant/cloudant');

//DAO = data access object
function DAO() {
  let cloudant_database_endpoint = process.env.CLOUDANT_DATABASE_ENDPOINT;
  let cloudant_database_apikey = process.env.CLOUDANT_DATABASE_APIKEY;
  let cloudant_database_name = process.env.CLOUDANT_DATABASE_NAME;
  let cloudant = Cloudant({
    url: cloudant_database_endpoint,
    plugins: [{ iamauth: { iamApiKey: cloudant_database_apikey } }]
  });

  //console.log('Cloudant Object:', JSON.stringify(cloudant));
  // cloudant.ping();
  //   .then((response) => console.log('Ping Response:', response))
  //   .catch((err) => console.log('Error:', err));
  this.cloudant = cloudant;
  //let db = cloudant.db.use(cloudant_database_name);
  //this.db = db;
}

exports.DAO = DAO;
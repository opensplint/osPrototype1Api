const sqlite3 = require('sqlite3').verbose();
let dbFilePath = process.env.SQLITE3_DB_FILE_PATH;

//DAO = data access object
function DAO() {
  console.log('Connecting to database file path:', dbFilePath);
  this.db = new sqlite3.Database(dbFilePath, (err) => {
    if (err) {
      console.log(err);
    }
    else {
      console.log('Connected to Database:', dbFilePath);
    }
  });
}

exports.DAO = DAO;
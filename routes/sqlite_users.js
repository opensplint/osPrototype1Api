const DataAccess = require('../models/DataAccessSqlLite');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  let xUsers;
  var dao1 = new DataAccess.DAO();
  dao1.db.serialize(() => {
    dao1.db.all("Select id1, name1 From Users1", (err, rows) => {
      xUsers = rows;
      res.json(xUsers);
    });
  });
});

router.post('/', function (req, res, next) {
  console.log(req);
})

module.exports = router;
const DataAccess = require("../models/DataAccessCloudant");
let express = require("express");
let router = express.Router();

/* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.sendStatus(404);
//   return;
//   let xUsers;
//   let dao1 = new DataAccess.DAO();
//   let db = dao1.cloudant.db.use("opensplint_nonpartitioned");
//   //console.log('Database Object:' + JSON.stringify(db));
//   let query = {
//     selector: {
//       //name1: "darshan",
//     },
//     fields: ["_id", "_rev", "name1", "email"],
//     // "sort": [
//     //   "email"
//     // ]
//     //"limit": 10
//     //"skip": 1
//     //"include_docs": true //to be used with db.list
//     //"use_index":"_design/something"
//   };
//   //console.log(query);
//   db.find(query, (err, result) => {
//     //console.log('result:' + JSON.stringify(result));
//     xUsers = result.docs;
//     res.json(xUsers);
//   });
// });

router.get("/:_id", function (req, res, next) {
  //console.log('req.params:', req.params);
  //console.log('req.params._id:', req.params._id);
  //console.log('req.param(\'_id\')', req.param('_id'));
  let xUsers;
  let dao1 = new DataAccess.DAO();
  let db = dao1.cloudant.db.use("opensplint_nonpartitioned");
  //console.log('Database Object:' + JSON.stringify(db));
  let query = {
    selector: {
      _id: req.params._id,
    },
    fields: ["_id", "_rev", "name1", "email"],
  };
  //console.log(query);
  db.find(query, (err, result) => {
    //console.log('result:' + JSON.stringify(result));
    xUsers = result.docs;
    res.json(xUsers);
  });
});

router.get("/:name1/:pass", function (req, res, next) {
  //console.log('req.params:', req.params);
  //console.log('req.params._id:', req.params._id);
  //console.log('req.param(\'_id\')', req.param('_id'));
  let xUsers;
  let dao1 = new DataAccess.DAO();
  let db = dao1.cloudant.db.use("opensplint_nonpartitioned");
  //console.log('Database Object:' + JSON.stringify(db));
  let query = {
    selector: {
      name1: req.params.name1,
      pass: req.params.pass
    },
    fields: ["_id", "_rev", "name1", "email"],
  };
  //console.log(query);
  db.find(query, (err, result) => {
    //console.log('result:' + JSON.stringify(result));
    xUsers = result.docs;
    res.json(xUsers);
  });
});

router.post("/", function (req, res, next) {
  console.log(req);
});

module.exports = router;

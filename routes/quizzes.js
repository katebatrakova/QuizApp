const express = require('express');
const router  = express.Router();


// module.exports = (db) => {
//   console.log('quizzes getting')

//   router.get("/quizzes", (req, res) => {
//     let query = `SELECT quizzes.name
// FROM quizzes;`;
//     console.log(query, 'query from quizzes');
//     db.query(query)
//       .then(data => {
//         const quizzes = data.rows;
//         res.send({ quizzes })
//         res.json({ quizzes });
//       })
//       .catch(err => {
//         res
//           .status(500)
//           .json({ error: err.message });
//       });
//    });
// return router;
// }
// module.exports = (db) => {

// router.get("/quizzes/new", (req, res) => {
//   res.render("create_quiz_form");
  //console.log(req.body)
// })
// router.post("/new", (req, res) => {
  //res.render("create_quiz_form");
  // console.log(req.body)
// })
//   return router;
// }
const express = require('express');

const router = express.Router();
const db = require('../../connection');

router.get('/beers', (req, res) => {
  db.query('SELECT * FROM beer ORDER BY rate DESC', (err, results) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
        sql: err.sql,
      });
    }
    return res.json(results);
  });
});

module.exports = router;

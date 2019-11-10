var express = require("express");
var router = express.Router();
var Candidate = require("../models/Candidate");

router.get("/", function(req, res) {
  Candidate.find(function(err, cnd) {
    if (err) {
      res.status(400);
      return res.json({ error: err });
    }
    res.json({ cnd });
  });
});

router.post("/", function(req, res) {
  if (!req.body) {
    res.status(400);
    res.json({ error: "Bad Request" });
  } else {
    var CandidateObj = new Candidate({
      name: req.body.name,
      position: req.body.position,
      location: req.body.location,
      avail: req.body.avail,
      years: req.body.years
    });
    CandidateObj.save(function(err) {
      if (err) {
        res.status(400);
        return res.json({ error: err });
      }
      res.json({ message: "New Candidate created.", Candidate: CandidateObj });
    });
  }
});

router.put("/:id", function(req, res) {
  if (!req.params.id) {
    res.status(400);
    res.json({ error: "Bad Request" });
  } else {
    Candidate.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          name: req.body.name,
          position: req.body.position,
          location: req.body.location,
          avail: req.body.avail,
          years: req.body.years
        }
      },

      function(err) {
        if (err) {
          res.status(400);
          return res.json({ error: err });
        }
        res.json({ message: "Candidate Updated" });
      }
    );
  }
});

router.delete("/:id", function(req, res) {
  Candidate.deleteOne({ _id: req.params.id }, function(err) {
    if (err) {
      res.status(400);
      return res.json({ error: err });
    }
    res.json({ message: "Candidate deleted" });
  });
});

module.exports = router;

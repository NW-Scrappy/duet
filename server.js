const express = require('express');
const PORT = process.env.PORT || 5000;
const db = require('./models');
// const routes = require('./routes');
const app = express();


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
// console.log(process.env.NODE_ENV);
// if (environment === 'production') {
//   app.use(express.static('client/build'));
// }
// Add routes, both API and view
// app.use(routes);
app.get("/", (req, res) => res.send("index"));



  // Find all bands and return them to the user with res.json
  app.get("/api/band", function (req, res) {
    db.Band.findAll({})
      .then(function (dbBand) {
        res.json(dbBand);
      });

  });

app.get("/api/band/:id", function (req, res) {
  // Find one Band with the id in req.params.id and return them to the user with res.json
  db.Band.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (dbBand) {
    res.json(dbBand);
  });
});

app.get("/api/:instrument", function (req, res) {
  if (req.params.instrument) {
    // Display the JSON for ONLY that character.

    db.Band.findAll({
      where: {
        instrument_seeking: req.params.instrument
      }
    }).then(function (dbBand) {
      return res.json(dbBand);
    });
    // } else {
    //     Band.findAll({
    //         where: {
    //             instrument_seeking: req.params.band
    //         }
    //     }).then(function (dbBand) {
    //         return res.json(dbBand);
    //     });
    //     console.log("instrument", dbBand)
    // }
  }
})



// Start the API server
// ADD SEQUELIZE HERE TO CONNECT TO YOUR DB
db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
      console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });
  });

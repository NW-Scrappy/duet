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


// Get all bands and return them to the user with res.json
app.get("/api/bands", function (req, res) {
    db.Band.findAll({})
      .then(function (dbBand) {
        res.json(dbBand);
      });
  });

  //Get bands searching for requested instrument 
  app.get("/api/bands/:instrument", function (req, res) {
    if (req.params.instrument) {
      // Display the JSON for ONLY that character.
      console.log(req.params.instrument)
      db.Band.findAll({
        where: {
          instrument_seeking: req.params.instrument
        }
      }).then(function (dbBand) {
        return res.json(dbBand);
      });
      
    }
  })
  // Get band with the request id and return them with res.json
  app.get("/api/bandID/:id", function (req, res) {
    db.Band.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbBand) {
      res.json(dbBand);
    });
  });
  
  /*MUSICIAN ROUTES*/
  // Find all musicians and return them to the user with res.json
  app.get("/api/musicians", function (req, res) {
  db.Musician.findAll({})
    .then(function (dbMusicians) {
      res.json(dbMusicians);
    });
});


app.get("/api/musicians/:instrument", function (req, res) {
  if (req.params.instrument) {
    // Display the JSON for ONLY that character.
    db.Musician.findAll({
      where: {
        instrument_playing: req.params.instrument
      }
    }).then(function (dbMusicians) {
      return res.json(dbMusicians);
    });
  }
})


app.post('/api/post', (req, res) => {
  const name = "the beatles";
  const instrument = "flute";
  const genre="rock"
  // const role = req.body.band;
  db.Band.create({
    band_name: name,
    instrument_seeking:instrument,
    band_genre: genre
    
    // role: role
  })
    .then(newOwner => {
      res.json(newOwner);
      console.log("hello")
    })
});

// Get musician with the requested id and return with res.json
app.get("/api/musicianID/:id", function (req, res) {
db.Musician.findOne({
  where: {
    id: req.params.id
  }
}).then(function (dbMusicians) {
  res.json(dbMusicians);
});
});

// Start the API server
// ADD SEQUELIZE HERE TO CONNECT TO YOUR DB
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });
  });

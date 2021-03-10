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
// Start the API server
// ADD SEQUELIZE HERE TO CONNECT TO YOUR DB
db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
      console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });
  });

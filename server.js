const express = require('express');
const session = require('express-session');
const routes = require('./controllers');

//Loads the handlebars module
const handlebars = require('express-handlebars');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const app = express();
const PORT = process.env.PORT || 3001;



// -----for Handlebars--------
const exphbs = require("express-handlebars");
const path = require("path");
const hbs = exphbs.create({});

app.engine ("handlebars", hbs.engine);
app. set("view engine", "handlebars");

app.use(express.static('./public/images'));
app.use(express.static(path.join(__dirname, "public")));
app.use(require("./controllers/exercise-routes"));
// -----for Handlebars--------



const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
//Sets our app to use the handlebars engine
app.set('view engine', 'handlebars');

//Sets handlebars configurations 
app.engine('handlebars', handlebars({
 layoutsDir: __dirname + '/views/layouts',
  }));

app.use(express.static('public')) 

app.get('/', (req, res) => {
  //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
  res.render('main', {layout : 'index'});
  });

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on http://localhost:' + PORT));
});

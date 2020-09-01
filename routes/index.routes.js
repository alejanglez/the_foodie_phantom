const express = require('express');
const router = express.Router();
const Cook = require("../models/Cook.model");

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/* GET private routes */

router.get("/main", (req, res, next) => {
	res.render("users/main", { userInSession: req.session.currentUser });
});

router.get("/private", (req, res, next) => {
	res.render("users/private", { cookInSession: req.session.currentCook })
});

router.get('/menu', (req, res, next) => res.render('menu/menu-layout'));


// .Controller to render all cooks
const getAllCooks = (req, res) => {
	Cook.find()
	  .then((cooksFromDB) => {
		console.log(cooksFromDB);
		res.render("explore", { cooks: cooksFromDB });
	  })
	  .catch((err) => console.log(`error while getting the cooks page ${err}`));
  };

  router.get("/", (req, res) => {
	Movie.find()
	  .then((moviesFromDB) => {
		console.log(moviesFromDB);
		res.render("menu/menu-list", { movies: moviesFromDB });
	  })
	  .catch((err) =>
		console.log(`Error while getting the movies from the DB: ${err}`)
	  );
  });
  /* GET Explore page */
  router.get("/explore", getAllCooks);
  
  
  router.get("/explore/search", (req, res, next) => {
	Cook.find()
	  .populate("menu")
	  .then((cooks) => {
		res.json(cooks);
	  })
	  .catch((err) => console.log(`error while getting the spots page ${err}`));
  });
  
  // //res.json  


module.exports = router;

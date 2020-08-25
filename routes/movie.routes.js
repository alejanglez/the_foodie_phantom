const express = require("express");
const router = express.Router();

// ********* require Movie model in order to use it *********
const Movie = require("../models/Movie.model");

// ********* require fileUploader in order to use it *********
const fileUploader = require("../configs/cloudinary.config");

// ****************************************************************************************
// GET route to display all the movies
// ****************************************************************************************

router.get("/", (req, res) => {
  Movie.find()
    .then((moviesFromDB) => {
      console.log(moviesFromDB);
      res.render("menu/movies-list", { movies: moviesFromDB });
    })
    .catch((err) =>
      console.log(`Error while getting the movies from the DB: ${err}`)
    );
});

// ****************************************************************************************
// GET route to display the form to create a new movie
// ****************************************************************************************

router.get("/create", (req, res) => res.render("menu/movie-create"));

// ****************************************************************************************
// POST route for saving a new movie in the database
// This route has the image upload example 🥳
// ****************************************************************************************

router.post("/create", fileUploader.single("image"), (req, res) => {
  console.log("HIIIIIIIIIIII");
  const { title, description } = req.body;
  console.log("HELLOO", req.file);
  Movie.create({ title, description, imageUrl: req.file.path })
    .then(() => res.redirect("/movies"))
    .catch((error) =>
      console.log(`Error while creating a new movie: ${error}`)
    );
  res.redirect("/movies");
});

// ****************************************************************************************
// GET route for querying a specific movie from the database
// and pre-filling the edit form
// ****************************************************************************************

router.get("/:id/edit", (req, res) => {
  console.log("caca");
  const { id } = req.params;
  Movie.findById(id)
    .then((movieToEdit) => res.render("menu/movie-edit", movieToEdit))
    .catch((error) =>
      console.log(`Error while getting a single movie for edit: ${error}`)
    );
});

// ****************************************************************************************
// POST route to save changes after updates in a specific movie
// ****************************************************************************************

router.post("/:id/edit", fileUploader.single("image"), (req, res) => {
  console.log("caca2");
  const { id } = req.params;
  const { title, description } = req.body;

  let imageUrl;
  if (req.file) {
    imageUrl = req.file.path;
  } else {
    imageUrl = req.body.existingImage;
  }

  Movie.findByIdAndUpdate(id, { title, description, imageUrl }, { new: true })
    .then(() => res.redirect(`/movies`))
    .catch((error) =>
      console.log(`Error while updating a single movie: ${error}`)
    );
});

module.exports = router;

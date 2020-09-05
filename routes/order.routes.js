const express = require("express");
const router = express.Router();

const Cook = require("../models/Cook.model");
const Menu = require("../models/Menu.model");
const User = require("../models/User.model");
const Order = require("../models/Order.model");

router.post("/order-create", (req, res) => {
  const { quantity } = req.body;
  // 'author' represents the ID of the user document
  Order.create({ quantity })
    .then((dbOrders) => {
      return User.findByIdAndUpdate(userId, {
        $push: { orders: dbOrders._id },
      });
    })
    .then(() => res.redirect("order/orders-list"))
    .catch((err) =>
      console.log(`Err while creating the post in the DB: ${err}`)
    );
});

router.get("/order-create", (req, res) => res.render("order/orders-list"));

// ****************************************************************************************
// GET route to display all the orders
// ****************************************************************************************

router.get("/orders-list", (req, res) => {
  Order.find()
    .populate("menuId")
    .populate("menuOwnerRef")
    .populate("userId")
    .populate({
      // we are populating author in the previously populated comments
      path: "cookId2",
      populate: {
        path: "menuOwnerRef",
        model: "Cook",
      },
    })
    .then((dbOrders) => {
      console.log(dbOrders);
      res.render("/orders-list", { orders: dbOrders });
    })
    .catch((err) =>
      console.log(`Err while getting the posts from the DB: ${err}`)
    );
});

// ****************************************************************************************
// GET route for displaying the post details page
// shows how to deep populate (populate the populated field)
// ****************************************************************************************

router.get("/:orderId", (req, res) => {
  const { orderId } = req.params;

  Order.findById(oderId)
    .populate("menuId")
    .populate("cookId2")
    .populate("userId")
    .then((foundOrder) => res.render("orders/details", foundOrder))
    .catch((err) =>
      console.log(`Err while getting a single post from the  DB: ${err}`)
    );
});

module.exports = router;

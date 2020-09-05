const express = require("express");
const router = express.Router();

const Cook = require("../models/Cook.model");
const Menu = require("../models/Menu.model");
const User = require("../models/User.model");
const Order = require("../models/Order.model");

router.get("/orders-success", (req, res) => res.render("order/orders-success"));

router.post("/order-create", (req, res) => {
  console.log(req.body);

  const { _id } = req.session.currentUser;
  const { quantity } = req.body;

  const ordersArr = [];

  console.log(quantity);

  if (quantity > 0) {
    Order.create({
      userId: _id,
      orders: ordersArr,
    })
      .then(() => res.redirect("/orders-success"))
      .catch((err) =>
        console.log(`Err while creating the post in the DB: ${err}`)
      );
  }
  res.render("cooks/details", { errorMessage: "Incorrect quantity" });
});

// ****************************************************************************************
// GET route to display all the orders
// ****************************************************************************************

router.get("/orders-success", (req, res) => {
  Order.find()
    .populate("menuId")
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

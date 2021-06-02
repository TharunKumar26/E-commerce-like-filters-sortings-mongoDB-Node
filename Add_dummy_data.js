const mongoose = require("mongoose");

const ProductSchema = require("./ProductSchema");

const ProductSchema = require("./Schema/Product");

const Product = new ProductSchema({
  name: "KSL12",
  price: 1000,
  rating: 4,
  color: ["blue", "green", "yellow"],
  description: "skssss",
  Category: "Sneakers",
  stock: false,
  count: 100,
});
Product.save().then(() => {
  console.log("saved");
});

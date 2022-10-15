const { addBookshelfHandler } = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addBookshelfHandler
  }
];

module.exports = routes;
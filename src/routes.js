const { 
  addBookshelfHandler, 
  getAllBookshelfHandler, 
  getBookshelfByIdHandler 
} = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addBookshelfHandler
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllBookshelfHandler
  },
  {
    method: "GET",
    path: "/books/{bookId}",
    handler: getBookshelfByIdHandler
  }
];

module.exports = routes;
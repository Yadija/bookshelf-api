const { 
  addBookshelfHandler, 
  getAllBookshelfHandler, 
  getBookshelfByIdHandler, 
  editBookshelfHandler
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
  },
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: editBookshelfHandler
  }
];

module.exports = routes;
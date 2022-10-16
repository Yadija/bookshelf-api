const { nanoid } = require("nanoid");
const bookshelf = require("./bookshelf");

// handler untuk menambahkan buku
const addBookshelfHandler = (request, h) => {
  const { 
    name, 
    year, 
    author, 
    summary, 
    publisher, 
    pageCount, 
    readPage, 
    reading 
  } = request.payload;

  const id = nanoid(16);
  const finished = pageCount === readPage;
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  const newBook = {
    name, 
    year, 
    author, 
    summary, 
    publisher, 
    pageCount, 
    readPage, 
    reading ,
    id,
    finished,
    insertedAt,
    updatedAt
  }

  bookshelf.push(newBook);
  
  if(name === undefined) {
    const response = h.response({
      status: "fail",
      message: "Gagal menambahkan buku. Mohon isi nama buku"
    });
    response.code(400);
    return response;
  }

  if(readPage > pageCount) {
    const response = h.response({
      status: "fail",
      message: "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount"
    });
    response.code(400);
    return response;
  }

  const isSuccess = bookshelf.filter((book) => book.id === id).length > 0;
  if(isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id
      }
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    status: "error",
    message: "Buku gagal ditambahkan"
  });
  response.code(500);
  return response;
};

// handler untuk mendapatkan semua buku
const getAllBookshelfHandler = (request, h) => {
  const { name, reading, finished } = request.query;

  const getResponse = (books) => {
    const response = h.response({
          status: "success",
          data: {
            bookshelf: books.map((book) => ({
              id: book.id,
              name: book.name,
              publisher: book.publisher
            }))
          }
        });
        response.code(200);
        return response;
  }

  if(name) {
      const filteredBooks = bookshelf.filter((book) => {
        return book.name.toLowerCase().includes(name.toLowerCase());
      });

      return getResponse(filteredBooks);
    }

  if(reading) {
      const filteredBooks = bookshelf.filter((book) => {
      return Number(book.reading) === Number(reading)
    });

      return getResponse(filteredBooks);
    }
  if(finished) {
      const filteredBooks = bookshelf.filter((book) => {
      return Number(book.finished) === Number(finished)
    });

      return getResponse(filteredBooks);
    }

    return getResponse(bookshelf);
};

// handler untuk mendapatkan buku berdasarkan id
const getBookshelfByIdHandler = (request, h) => {
  const { bookId } = request.params;

  const book = bookshelf.filter((b) => b.id === bookId)[0];

  if(book !== undefined) {
    return {
      status: 'success',
      data: {
        book
      }
    }
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan'
  });
  response.code(404);
  return response;
};

// handler untuk mengubah buku
const editBookshelfHandler = (request, h) => {
  const { bookId } = request.params;

  const { 
    name, 
    year, 
    author, 
    summary, 
    publisher, 
    pageCount, 
    readPage, 
    reading 
  } = request.payload;

  const updatedAt = new Date().toISOString();

  const index = bookshelf.findIndex((book) => book.id === bookId);

  if (index !== -1) {
    if(name === undefined) {
      const response = h.response({
        status: "fail",
        message: "Gagal menambahkan buku. Mohon isi nama buku"
      });
      response.code(400);
      return response;
    }
  
    if(readPage > pageCount) {
      const response = h.response({
        status: "fail",
        message: "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount"
      });
      response.code(400);
      return response;
    }

    bookshelf[index] = {
      ...bookshelf[index],
      name, 
      year, 
      author, 
      summary, 
      publisher, 
      pageCount, 
      readPage, 
      reading,
      updatedAt,
    };
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil diperbarui',
    });
    response.code(200);
    return response;
  }
  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbarui buku. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = { 
  addBookshelfHandler, 
  getAllBookshelfHandler, 
  getBookshelfByIdHandler,
  editBookshelfHandler
};
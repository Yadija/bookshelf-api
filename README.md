# Bookshelf API

Website ini dibuat untuk memenuhi submission <i>belajar membuat aplikasi back-end untuk pemula</i> dari [Dicoding](https://www.dicoding.com)

## 🚀Installation

- Clone this repository
  - `git clone https://github.com/yadija/bookshelf-api.git`
- Install dependencies
  - `npm install / yarn install`
- Running API
  - `npm run start / npm start`


## Documentation

- Visit `http://localhost:5000`

### GET
Get All Bookshelf

`/books`

Response code `200`
  ```json
    {
      "status": "string",
      "data": {
        "books": [
          {
            "id": "string",
            "name": "string",
            "publisher": "string"
          },
          {
            "id": "string",
            "name": "string",
            "publisher": "string"
          }
        ]
      }
    }
  ```
  
or
  ```json
    {
      "status": "string",
      "data": {
        "books": []
      }
    }
  ```

<br>
<br>

Get Bookshelf by Id

`/books/:bookId`

Response code `200`
  ```json
    {
      "status": "string",
      "data": {
        "book": {
            "id": "string",
            "name": "string",
            "year": 0,
            "author": "string",
            "summary": "string",
            "publisher": "string",
            "pageCount": 0,
            "readPage": 0,
            "finished": false,
            "reading": false,
            "insertedAt": "string",
            "updatedAt": "string",
        }
      }
    }
  ```

<br>

Response code `404`
  ```json
    {
      "status": "string",
      "message": "string"
    }
  ```

<br>
<br>

### POST
Create Book

`/books`

Request Body
  ```json
    {
      "name": "string",
      "year": 0,
      "author": "string",
      "summary": "string",
      "publisher": "string",
      "pageCount": 0,
      "readPage": 0,
      "reading": false,
    }
  ```

<br>

  Response code `201`
  ```json
    {
      "status": "string",
      "message": "string",
      "data": {
        "bookId": "string"
      }
    }
  ```

<br>

  Response code `400`
  ```json
    {
      "status": "string",
      "message": "string"
    }
  ```

<br>

  Response code `500`
  ```json
    {
      "status": "string",
      "message": "string"
    }
  ```

<br>
<br>

### PUT
Edit Book by Id

`/books/:bookId`

Request Body
  ```json
    {
      "name": "string",
      "year": 0,
      "author": "string",
      "summary": "string",
      "publisher": "string",
      "pageCount": 0,
      "readPage": 0,
      "reading": false,
    }
  ```

<br>

  Response code `200`
  ```json
    {
      "status": "string",
      "message": "string"
    }
  ```

<br>

  Response code `400`
  ```json
    {
      "status": "string",
      "message": "string"
    }
  ```

<br>

  Response code `404`
  ```json
    {
      "status": "string",
      "message": "string"
    }
  ```

<br>
<br>

### DELETE
Delete Book by Id

`/books/:bookId`

<br>

  Response code `200`
  ```json
    {
      "status": "string",
      "message": "string"
    }
  ```

<br>

  Response code `404`
  ```json
    {
      "status": "string",
      "message": "string"
    }
  ```
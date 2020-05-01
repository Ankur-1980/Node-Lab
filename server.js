"use strict"
const http = require('http')
const quotes = require('./quotes')
const quoteAPI = require('./quoteAPI')

http.createServer((req, res) => {
  const count = Math.floor(Math.random() * Math.floor(quotes.length))

  res.write(`${quotes[count]}`);
  res.end();

}).listen(3000)


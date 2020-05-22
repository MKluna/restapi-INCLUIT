const express = require('express');
const {Router}= require('express');
const router = Router();

const bookController = require('../controller/bookController');
const authorControllers = require('../controller/authorControllers');

/* *************************************************************************/
router.get('/author',authorControllers.showAuthors)
router.post('/author',authorControllers.newAuthor);
router.put('/author/:id',authorControllers.editAuthor);
router.delete('/author/:id',authorControllers.deleteAuthor);
/* *************************************************************************/
router.get('/book',bookController.showBooks);
router.post('/book',bookController.newBook)
router.put('/book/:id',bookController.editBook)
router.delete('/book/:id',bookController.deleteBook)
/* *************************************************************************/
module.exports = router
const { Router } = require('express');
const { shortUrl, getURL } = require('../controllers/urlController.js');

const urlRoutes = Router();

urlRoutes.post('/', shortUrl);
urlRoutes.get('/:id', getURL);

module.exports = urlRoutes;
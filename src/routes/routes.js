const express = require('express');
const router = express.Router();
const UserControllers = require('../controllers/UserControllers');
const StoresControllers = require('../controllers/StoresControllers');

// user routes
router.get('/user', UserControllers.getUsers)
router.get('/userByName', UserControllers.getUserByName)
router.post('/user', UserControllers.newUser)

// stores routes
router.get('/stores', StoresControllers.getStores)
router.get('/storesByCnpj', StoresControllers.getStoreByCnpj)
router.post('/stores', StoresControllers.postNewStore)
router.put('/storesNameUpdate', StoresControllers.putNameStores)

module.exports = router
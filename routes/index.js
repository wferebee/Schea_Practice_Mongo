var express = require('express');
var router = express.Router();
var userController = require('../controller/index.js')

/*
 * GET
 */
router.get('/users', userController.list);

/*
 * GET
 */
router.get('/users/:username', userController.show);
    


/*
 * POST
 */
router.post('/', userController.create);

module.exports = router;

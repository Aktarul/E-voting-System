var express = require('express'),
    router = express.Router(),
    voterController = require('../controller/voter');

router.post('/', voterController.createVoter);

module.exports = router;
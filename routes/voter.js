var express = require('express'),
    router = express.Router(),
    voterController = require('../controller/voter');

router.post('/', voterController.createVoter);
router.get('/', voterController.getAllVoter);
router.get('/:id', voterController.getSingleVoter);
router.patch('/:id', voterController.updateVoter);

module.exports = router;
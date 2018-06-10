var express = require('express'),
    router = express.Router(),
    candidateController = require('../controller/cadidate');

router.post('/', candidateController.createCadidate);
router.get('/', candidateController.getAllCandidate);
router.patch('/:id', candidateController.updateCandidate);

module.exports = router;
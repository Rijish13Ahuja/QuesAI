const express = require('express');
const router = express.Router({ mergeParams: true });
const { protect } = require('../middleware/authMiddleware');
const {
  createEpisode,
  updateEpisode
} = require('../controllers/episodeController');

router.route('/')
  .post(protect, createEpisode);

router.route('/:id')
  .put(protect, updateEpisode);

module.exports = router;
const express = require('express');
const { getPlayers, getPlayer, createPlayer, editPlayer, deletePlayer } = require('../controllers/players.controller');
const router = express.Router();

router.get('/', getPlayers);
router.get('/:id', getPlayer);
router.post('/', createPlayer);
router.put('/:id', editPlayer);
router.delete('/:id', deletePlayer);

module.exports = router;
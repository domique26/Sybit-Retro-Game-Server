const { model } = require('mongoose');
const Player = require('../models/player.model');

const getPlayers = async (req, res) => {
  try {
    const players = await Player.find({});
    res.status(200).json(players);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
};

const getPlayer = async (req, res) => {
  try {
    const { id } = req.params;
    const player = await Player.findById(id);
    res.status(200).json(player);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

const createPlayer = async (req, res) => {
  try {
    const player = await Player.create(req.body);
    res.status(200).json(player);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

const editPlayer = async (req, res) => {
  try {
    const {id} = req.params;
    const player = await Player.findByIdAndUpdate(id,req.body);
    if(!player) {
      res.status(404).json({message: "Player not found"});
    }
    const updatedPlayer = await Player.findById(id);
    res.status(200).json(updatedPlayer);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

const deletePlayer = async (req, res) => {
  try {
    const { id } = req.params;
    await Player.findByIdAndDelete(id);
    res.status(200).json({message: "Deleted Player Successfully!"});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

module.exports = {
  getPlayers,
  getPlayer,
  createPlayer,
  editPlayer,
  deletePlayer
}
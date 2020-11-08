const mongoose = require('mongoose');
const choice = require('../../database/schema.js');


module.exports = {
  get: async (req, res) => {
    try {
      let allResults = await choice.find();
      res.status(200).send(allResults);
    } catch(error) {
      res.status(400).send(error);
    }
  },

  delete: async (req, res) => {
    try {
      await choice.remove({});
      res.status(200).send('sucessfully deleted all choices')
    } catch(error) {
      res.status(400).send('error deleting all choices')
    }
  },

  post: async (req, res) => {
    let newItem = await new choice({
      restaurantName: req.body.restaurantName
    })
    try {
    await newItem.save();
    res.status(200).send('sucessfully posted');
    } catch (error) {
      res.status(400).send('error posting');
    }
  },

  deleteOne: async (req, res) => {
    try {
      await choice.findOneAndDelete({_id: req.params.id})
      res.status(200).send('sucessfully deleted one');
    } catch (error) {
      res.status(400).send('error deleting one');
    }
  }

}
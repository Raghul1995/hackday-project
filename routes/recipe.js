const express = require('express');
const router = express.Router();
const utils = require("../utils")
const data = require("../data.json")

router.get('/', (req, res, next) => {

  //const dishes = await utils.getDishes()
  const dishes = data
  res.json(dishes)

});
router.get('/random', async (req, res, next) => {

  const randomDish = await utils.getRandomDish()
  res.json(randomDish)

});
router.get('/unique/:id', async (req, res, next) => {
  const randomDish = await utils.getOneDish(req.params.id)
  res.json(randomDish)

});

module.exports = router;
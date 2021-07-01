var express = require('express');
var router = express.Router();
const utils = require("../utils")


router.get('/',  async(req, res, next) => {  

  const dishes = await utils.getDishes()
  res.json(dishes)

      });
router.get('/random',  async(req, res, next) => {  

  const randomDish = await utils.getRandomDish()
  res.json(randomDish)

      });
router.get('/unique/:id',  async(req, res, next) => {  
  const randomDish = await utils.getOneDish(req.params.id)
  res.json(randomDish)

      });

module.exports = router;
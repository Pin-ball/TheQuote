var express = require('express');
var router = express.Router();

const seedrandom = require('seedrandom');
const QUOTE_LIST = require('../ressources/quotes.json')


router.get('/one-per-day', function(req, res, next)
{
  const daySeed = new Date().toLocaleDateString("fr"),
        generator = seedrandom(daySeed),
        dayIndexPicker = generator().toFixed(2),
        dayQuoteIndex = Math.round((QUOTE_LIST.length - 1) * dayIndexPicker)
        res.json(QUOTE_LIST[dayQuoteIndex])
});
// Revoir one-per-day pour retirer le random (qui peut donner le même résultat plusieurs fois d'affilée), et peut être les passer un par un (avec jour de l'année ?)


router.get('/random', function(req, res, next)
{
  const generator = seedrandom(),
        index = randomIntFromInterval(0, QUOTE_LIST.length-1)

  res.json(QUOTE_LIST[index])
});


// min and max included 
function randomIntFromInterval(min, max) 
{
  return Math.floor(Math.random() * (max - min + 1) + min)
}


module.exports = router;

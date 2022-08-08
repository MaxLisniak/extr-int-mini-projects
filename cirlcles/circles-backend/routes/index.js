var express = require('express');
var router = express.Router();
const redis = require("redis")

const redisClient = redis.createClient();
redisClient.connect();

/* GET home page. */
router.get('/', async function (req, res, next) {
  let x = await redisClient.get('x');
  x = parseInt(x);
  let y = await redisClient.get('y');
  y = parseInt(y);
  return res.send({ x, y });
});

router.post('/', async function (req, res, next) {
  console.log(req.body)
  await redisClient.set('x', req.body.x);
  await redisClient.set('y', req.body.y);
  return res.sendStatus(200);
});

module.exports = router;

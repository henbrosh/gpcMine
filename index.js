var express = require("express");
var router = express.Router();
var axios = require('axios');


axios.get('https://api.ethermine.org/miner/0xbda1841a530ff346d948fd240bb99ea0692d80e0/workers')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  }); 
  
router.get('/' , function(req,res,next){
  res.render('index', {title: 'Express'});
})
module.exports = router;
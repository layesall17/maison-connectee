const Led = require("../models/Led");

const router = require("express").Router();


router.get('/', async(req, res)=>{
    try {
      const leds = await Led.find();
      res.status(200).json(leds); 
    } catch (error) {
      res.status(500).json({ message: error.message }); 
    }
  })
  

module.exports = router;
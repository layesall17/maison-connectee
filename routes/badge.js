const Badge = require("../models/Badge");

const router = require("express").Router();


router.get('/', async(req, res)=>{

    try {   
      const response = await Badge.find(); 
      res.status(200).json(response); 
    } catch (error) {
      res.status(500).json({ message: error.message }); 
    }
  })
  

module.exports = router;
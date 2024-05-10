const Led = require("../models/Led");

const router = require("express").Router();


router.get('/', async(req, res)=>{
    const {led, state} = req.query
    let response
    try {
        if (led || state) {
            response = led ? await Led.find({ led }): await Led.find({ "state": state })
        }else{
            response = await Led.find();
        }
       
      res.status(200).json(response); 
    } catch (error) {
      res.status(500).json({ message: error.message }); 
    }
  })
  

module.exports = router;
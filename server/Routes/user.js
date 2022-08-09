const express = require('express');

const userCtr = require('../controllers/user');
const auth = require('../middleware/auth');
const router = express.Router();


router.post("/signIn", userCtr.createUser);
  

router.get("/message",auth, userCtr.test);
  

router.post("/getInfo",auth,userCtr.getInfoUser);
  
  
router.post("/sendPoint",auth,userCtr.sendPoint);
  
  
router.post("/getPoint",auth, userCtr.getPoint);
  
  
router.post("/Login",userCtr.login);


module.exports = router;
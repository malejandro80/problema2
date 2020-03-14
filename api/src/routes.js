const { Router } = require("express");
const router = Router();
const time = require('./utcTimeController');



router.post("/time", time.calcTIME);


module.exports = router;

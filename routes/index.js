let express = require('express');
let router = express.Router();

/* GET Controllers. */

let loginController=require('../controllers/loginController');

/* GET home page. */
router.get('/', loginController.index);
router.post('/',loginController.verify);

module.exports = router;

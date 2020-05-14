const { check, validationResult } = require('express-validator');
const login=require('../models/Login');


exports.index=(req, res)=>{

	res.render('index', { title: 'Express' });

}

exports.verify=[
  check('email','Invalid email').isEmail(),
  check('password','Minimum password length 4 ').isLength({min:4}),
  (req, res, next)=>{
  	
  const result = validationResult(req);
  var errors = result.errors;

  if(errors!=''){
    
     res.render('result',{err:errors});
  }
  else{
        login.findOne({

        	attributes: ['id', 'email', 'password'],

           where:{
           	email:req.body.email,
           	password:req.body.password
     }
	})
    .then(data=>{

		  	if(data===null){
              
              let errors=[
              	{
              		msg:'email or password not match'
              	}

              ]
		  		 res.render('result',{err:errors});
		  	}
		  	else
		  		 res.render('result',{data:data.dataValues.email});
		 
		  })
  
		}
}
];




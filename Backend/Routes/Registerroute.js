const Router = require('express').Router();
const {Registerlogic} = require('../Controllers/Registerlogic')
const signinlogic = require('../Controllers/signinlogic')
const registerdetails = require('../Controllers/registerdetails')
const get_user_details = require('../Controllers/getuserdetails')
const feedback = require('../Controllers/feedback')

Router.post('/Register',Registerlogic)

Router.post('/signin',signinlogic)

Router.post('/register_details',registerdetails)

Router.get('/details',get_user_details)

Router.post('/feedback',feedback)

module.exports = Router
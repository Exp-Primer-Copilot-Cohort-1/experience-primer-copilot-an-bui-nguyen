// create web server
var express = require('express');
// get router
var router = express.Router();
// get comment model
var Comment = require('../models/comment');
// get article model
var Article = require('../models/article');
// get user model
var User = require('../models/user');
// get comment model
var Comment = require('../models/comment');
// get checkLogin middleware
var checkLogin = require('../middlewares/check').checkLogin;

// POST /comments create a comment
router.post('/', checkLogin, function(req, res, next){
    // get data
    var author = req.session.user._id;
    var articleId = req.fields.articleId;
    var content = req.fields.content;

    // check data
    try{
        if(!content.length){
            throw new Error('Please fill in the comments');
        }
    }catch(e){
        req.flash('error', e.message);
        return res.redirect('back');
    }
});
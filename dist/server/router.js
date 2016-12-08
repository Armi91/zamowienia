const express = require('express');
const router = express.Router();
const db = require('./db');
const jwt = require('jsonwebtoken');
const secret = "superSecret";
const path = require('path');


// Login

router.post('/login', function(req, res){

	console.log(req.body);
	db.User.findOne({
		username: req.body.username
	}, function(err, user){

		if(err) throw err;
		console.log(user);
		if(!user){
			res.json({success: false, message: "Nie znaleziono użytkownika"});
		}else if(user){
			if(user.password != req.body.password){
				res.json({success: false, message: "Złe hasło"});
			}else{
				var token = jwt.sign(user, secret, {});
				console.log(res);

				res.json({
					success: true,
					message: 'logged in',
					token: token,
				})
			}
		}

	});

});

router.post('/user/nowe-zamowienie/garnitur', function(req, res){
console.log(req.body.params);
	var suit = new db.Suit(req.body);

	suit.save(function(err, result){
		if (err) {
			return console.log(err);
		} else {
			console.log("Zapisane  " + result);
		}
	});



	res.end();
});

router.post('/user/nowe-zamowienie/marynarka', function(req, res){

	var jacket = new db.Jacket(req.body);

	jacket.save(function(err, result){
		if (err) {
			return console.log(err);
		} else {
			console.log("Zapisane  " + result);
		}
	});

	res.end();
});

router.post('/user/nowe-zamowienie/spodnie', function(req, res){

	var trouser = new db.Trouser(req.body);

	trouser.save(function(err, result){
		if (err) {
			return console.log(err);
		} else {
			console.log("Zapisane  " + result);
		}
	});

	res.end();
});

router.post('/user/nowe-zamowienie/kamizelka', function(req, res){

	var vest = new db.Vest(req.body);

	vest.save(function(err, result){
		if (err) {
			return console.log(err);
		} else {
			console.log("Zapisane  " + result);
		}
	});

	res.end();
});

router.get('/user/zamowienia', function(req, res, next){
	res.set('Access-Control-Allow-Origin', "*");
	db.Trouser.find({}, function(err, result){
		if (err) {
			return res.status(500).json({
				message: "Bład serwera:",
				error: err,
				success: false
			});
		}
		console.log("---------/user/zamowienia");
		res.status(200).json({
			data: result,
			success: true
		});
	});

	// next();
});

module.exports = router;
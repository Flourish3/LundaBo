module.exports = function(app) {
	var Tenant = require('../app/models/Tenant.js')
	var db = require('mongoose');
	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	
	app.use(function(req, res, next){
		console.log("Looking at URL" + req.url);
		next();
	});

	app.get('/get_tenants',function(req,res,next){
		Tenant.find(function(err,tenants){
			if (err) return next(err);
    		res.json(tenants);
		});
	});

	app.delete('/delete_tenant/:id', function(req, res, next) {
		Tenant.findByIdAndRemove(req.params.id, req.body, function (err, post) {
			if (err) return next(err);
			//res.json(post);
			res.redirect(204,'/');
		});
	});

	app.post('/process',function(req,res,next){
		Tenant.create(req.body, function(err,post){
			if(err) return next(err);
		});
		//Verify correct input
		res.redirect(303,'/tenantCreated');
	});

	app.get('/error',function(req,res,next){
		res.json(req.body);
	})

	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});



};
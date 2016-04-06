module.exports = function(router, passport){
	router.get('/', function(req, res){
		res.render('index.ejs');
	});

	router.get('/login', function(req, res){
		res.render('login.ejs', { message: req.flash('loginMessage') });
	});
	router.post('/login', passport.authenticate('local-login', {
		successRedirect: '/profile',
		failureRedirect: '/auth/login',
		failureFlash: true
	}));

	router.get('/signup', function(req, res){
		res.render('signup.ejs', { message: req.flash('signupMessage') });
	});


	//mobile stuff
	router.post('/signup/mobile', passport.authenticate('local-signup'), function(req,res){
		res.end("Registration Success");
	});

	//mobile stuffs
	router.post('/login/mobile', passport.authenticate('local-login'), function(req,res){
		res.end("Login Success");
	});

	router.post('/signup', passport.authenticate('local-signup', {
		successRedirect: '/auth/login',
		failureRedirect: '/auth/signup',
		failureFlash: true
	}));



	router.get('/logout', function(req, res){
		req.logout();
		res.redirect('/');
	});
};
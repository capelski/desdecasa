const express = require('express');
const { join } = require('path');

module.exports = () => {
	const app = express();
	app.set('view engine', 'ejs');
    app.use('/', express.static(join(__dirname, 'public')));
    
    app.get('/', (req, res, next) => res.render('index'));
    
    app.get('/establishments', (req, res, next) => res.render('establishments/discount'));
    app.get('/establishments/alphabetic', (req, res, next) => res.render('establishments/alphabetic'));
    app.get('/establishments/discount', (req, res, next) => res.render('establishments/discount'));
    app.get('/establishments/0', (req, res, next) => res.render('establishments/day0'));
    app.get('/establishments/1', (req, res, next) => res.render('establishments/day1'));
    app.get('/establishments/2', (req, res, next) => res.render('establishments/day2'));
    app.get('/establishments/3', (req, res, next) => res.render('establishments/day3'));
    app.get('/establishments/4', (req, res, next) => res.render('establishments/day4'));
    app.get('/establishments/5', (req, res, next) => res.render('establishments/day5'));
    app.get('/establishments/6', (req, res, next) => res.render('establishments/day6'));
    app.get('/establishments/map', (req, res, next) => res.render('establishments/maps/' + req.query.target));

    app.get('/sales', (req, res, next) => res.render('sales'));
    app.get('/sign-up', (req, res, next) => res.render('sign-up'));
    app.get('/gift', (req, res, next) => res.render('gift'));
    app.get('/faq', (req, res, next) => res.render('faq'));
    app.get('/legal', (req, res, next) => res.render('legal'));
    app.get('/advertise', (req, res, next) => res.render('advertise'));
    app.get('/contact', (req, res, next) => res.render('contact'));

	return app;
};

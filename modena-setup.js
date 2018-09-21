const { configureEndpoints } = require('modena');

module.exports = configureEndpoints(router => {
    router.get('/', (req, res, next) => res.render('index'));
    
    router.get('/establishments', (req, res, next) => res.render('establishments/discount'));
    router.get('/establishments/alphabetic', (req, res, next) => res.render('establishments/alphabetic'));
    router.get('/establishments/discount', (req, res, next) => res.render('establishments/discount'));
    router.get('/establishments/0', (req, res, next) => res.render('establishments/day0'));
    router.get('/establishments/1', (req, res, next) => res.render('establishments/day1'));
    router.get('/establishments/2', (req, res, next) => res.render('establishments/day2'));
    router.get('/establishments/3', (req, res, next) => res.render('establishments/day3'));
    router.get('/establishments/4', (req, res, next) => res.render('establishments/day4'));
    router.get('/establishments/5', (req, res, next) => res.render('establishments/day5'));
    router.get('/establishments/6', (req, res, next) => res.render('establishments/day6'));
    router.get('/establishments/map', (req, res, next) => res.render('establishments/maps/' + req.query.target));

    router.get('/sales', (req, res, next) => res.render('sales'));

    router.get('/sign-up', (req, res, next) => res.render('sign-up'));

    router.get('/gift', (req, res, next) => res.render('gift'));

    router.get('/faq', (req, res, next) => res.render('faq'));

    router.get('/legal', (req, res, next) => res.render('legal'));

    router.get('/advertise', (req, res, next) => res.render('advertise'));

    router.get('/contact', (req, res, next) => res.render('contact'));
});

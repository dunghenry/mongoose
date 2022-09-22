const comment = require('./comment.route');
const club = require('./club.route');
const player = require('./player.route');
const event = require('./event.route');
const bucket = require('./bucket.route');
const routes = (app) => {
    app.use('/api', comment);
    app.use('/api', club);
    app.use('/api', player);
    app.use('/api', event);
    app.use('/api', bucket);
};

module.exports = routes;

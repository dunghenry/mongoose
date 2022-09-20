const comment = require('./comment.route');
const routes = (app) => {
    app.use('/api', comment);
};

module.exports = routes;

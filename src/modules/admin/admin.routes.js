const { admin } = require('./admin.controller');

module.exports = (app) => {
    app.get('/api/admin', admin);
}
const { login } = require('./admin.controller');

module.exports = (app) => {
    app.route('/api/admin')
        .post(login);
}
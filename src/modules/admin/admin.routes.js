const path = require('path');
const { login } = require(path.join(process.cwd(),'src/modules/admin/admin.controller'));

module.exports = (app) => {
    app.route('/api/admin')
        .post(login);
}
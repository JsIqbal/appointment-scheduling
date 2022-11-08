const path = require('path');
const { signup } = require('./patient.controller');

module.exports = (app) => {
    app.post('/api/patient/signup', signup);
}
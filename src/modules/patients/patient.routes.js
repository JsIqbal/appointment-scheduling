const path = require('path');
const { signup, login } = require('./patient.controller');

module.exports = (app) => {
    app.post('/api/patient/signup', signup);
    app.post('/api/patient/login', login);
}
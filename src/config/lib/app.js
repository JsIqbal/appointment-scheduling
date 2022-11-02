module.exports.start = () => {
    const app = require('./express')();

    const port = 5000;
    app.listen(() => {
        console.log(`server running on port ${port}...`);
    })
}
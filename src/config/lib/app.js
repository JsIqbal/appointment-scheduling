module.exports.start = () => {
    const app = require('./express')();

    const port = 5000;
    app.listen(port, () => {
		console.log("Server running on port %s in %s mode...",port, app.settings.env);
	});
}
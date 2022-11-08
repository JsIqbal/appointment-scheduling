const path = require("path");
const async = require('async');

const init = async () => {
    const sequelize = require(path.join(process.cwd(), "src/config/lib/sequelize"));

    sequelize.query("CREATE DATABASE IF NOT EXISTS appointment", (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.log(res);
        }
    });

    const Admin = require(path.join(process.cwd(), "src/modules/admin/admin.model.js"));
    
    require(path.join(process.cwd(), "src/modules/patients/patient.model.js"));

    await sequelize.sync();

    function adminSeeder(callback) {
        Admin.findOrCreate({
            where: { email: "javascriptiqbal@gmail.com" },
            defaults: {
                password: "12345678",
            },
        }).then(function () {
            callback();
        });
    }

    async.waterfall([adminSeeder], function (err) {
		if (err) console.error(err);
		else console.info("DB seed completed");
		process.exit();
	});
};

init();
const path = require('path');
const Admin = require(path.join(process.cwd(),'src/modules/admin/admin.model'));

const { generateAccessToken } = require(path.join(process.cwd(), "src/modules/admin/admin.service"));

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const admin = await Admin.findOne({ where: { email, password } });

        if (!admin) {
            return res.status(400).send("Invalid credentials.");
        };

        res.cookie("access_token", generateAccessToken(admin), {
            httpOnly: true,
            signed: true
        });

        res.status(200).send(admin);
    } catch (error) {
        console.log(error);

        res.status(500).send("Internal server error.");
    }
}

module.exports.login = login;
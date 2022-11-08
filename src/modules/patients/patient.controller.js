const path = require('path');
const { generateAccessToken } = require(path.join(process.cwd(), "src/modules/patients/patient.service"));
const Patient = require('./patient.model');

const signup = async (req, res) => {
    try {
        const { email, password } = req.body;

        const [ user, created ] = await Patient.findOrCreate({
            where: { email },
            defaults: { email, password }
        });

        if(!created) return res.status(409).send("User is already created.");

        return res.status(201).send(user);
    } catch (err) {
        console.log(err);

        res.status(500).send("Internal server error.")
    };
};


const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await Patient.findOne({ where: { email, password } });

        if (!user) {
            return res.status(400).send("Invalid credentials.");
        };

        res.cookie("patient_token", generateAccessToken(user), {
            httpOnly: true,
            signed: true
        });

        res.status(200).send(user);
    } catch (error) {
        console.log(error);

        res.status(500).send("Internal server error.");
    }
}

module.exports.signup = signup;
module.exports.login = login;
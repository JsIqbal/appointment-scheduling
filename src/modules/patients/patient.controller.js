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


module.exports.signup = signup;
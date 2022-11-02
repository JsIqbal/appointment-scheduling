const admin = (req, res) => {
    console.log("Hello");
    try {
        res.send("Request Recieved");
    }
    catch(err) {
        console.log(err);
    }
}

module.exports.admin = admin;
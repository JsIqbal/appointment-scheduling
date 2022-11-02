const express = require('express');

const app = express();

port = 5000;

app.listen(() => {
    console.log(`server running on port ${port}...`);
})
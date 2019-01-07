const express = require('express');
const app = express();

app.listen(8008, () => {
    console.log('now listening for requests on port 8008');
});
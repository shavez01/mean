const express = require('express');
const path = require('path');
const port = 8080;
const host = 'http://localhost:8080';

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use("/", express.static(path.join(__dirname, "public")));

app.listen(port, () => {
    console.log(`Server is listening on port ${host}`);
});
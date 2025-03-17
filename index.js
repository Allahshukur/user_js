const express = require('express');
const app = express();
const userRoutes = require("./routes/users");
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(express.static("node_modules"));

app.use(userRoutes);

app.listen(port, () => {
    console.log(`Server app listening on port ${port}`)
})
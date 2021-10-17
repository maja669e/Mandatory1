var express = require('express');
var app = express();

app.use(express.static("public"));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});


const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});
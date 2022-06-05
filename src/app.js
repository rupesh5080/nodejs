const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("hello from the express side");

});
app.get("/about", (req, res) => {
    res.send("from contact side");
});
app.get("/download", (req, res) => {
    res.send("from download side");
});
app.get("/live", (req, res) => {
    res.send("from live side");
});
app.get("/app", (req, res) => {
    res.send("from app side");
});


app.listen(8000, () => {
    console.log("listening to port no 8000");
});
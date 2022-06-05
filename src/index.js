"use strict";
const path = require("path");
const express = require("express");
const hbs=require("hbs");
const app = express();
const port = 8000;
// console.log(__dirname);
const staticpath = path.join(__dirname, "../public");
console.log()
const templetes=path.join(__dirname,"../templates/views")
const partialspath=path.join(__dirname,"../templates/partials");
// console.log(path.join(__dirname,"../templates/views"));
app.set("view engine","hbs");
app.set("views",templetes);
// app.use(express.static(staticpath));
hbs.registerPartials(partialspath);
// console.log(staticpath)


app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/about",(req,res)=>{
    res.render("about");
})
app.get("/", (req, res) => {
    res.send("hello from the home side");
});
app.get("/about", (req, res) => {
    res.send([
        "html", "css", "bootstrap", "javascript", "node_js", "express_js"
    ]);
});

app.get("/live", (req, res) => {
    res.json([
        {
            name: "rupesh",
            age: 26,
            email: "rupesh.acer@gmail.com",
            mobile: 9990990792,
            city: "delhi"
        },
        {
            name: "rupesh",
            age: 26,
            email: "rupesh.acer@gmail.com",
            mobile: 9990990792,
            city: "delhi"
        },
        {
            name: "rupesh",
            age: 26,
            email: "rupesh.acer@gmail.com",
            mobile: 9990990792,
            city: "delhi"
        },
        {
            name: "rupesh",
            age: 26,
            email: "rupesh.acer@gmail.com",
            mobile: 9990990792,
            city: "delhi"
        },
        {
            name: "rupesh",
            age: 26,
            email: "rupesh.acer@gmail.com",
            mobile: 9990990792,
            city: "delhi"
        }
    ]);
});
app.get("*",(req,res)=>{
    res.render("404",{
        errorpage:"opps page could't be Found"
    })
})
app.listen(port, () => {
    console.log(`dear, Developer your port no-${port} started Successfully.`);
});
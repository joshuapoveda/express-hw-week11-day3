const express = require("express");
const app = express();
const port = 3000;
const guitars = require("./models/guitars");
const history = require("./models/history");

//view engine

app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

//routes

app.get("/", (req, res) => {
  res.send("First Test:" + "<a href=/test2><br><h3>Click Me</h3></br><a/>");
});

app.get("/test2/:symbol", (req, res) => {
  res.send("Testing again...");
});

app.get("/test3/:parameter", (req, res) => {
  res.send(req.params.parameter);
});

app.get("/guitars/", (req, res) => {
  res.send(guitars);
});

app.get("/guitars/:indexOfGuitars/", (req, res) => {
  console.log(req.query.fav);
  res.send(guitars[req.params.indexOfGuitars].brand + "-->" + req.query.status);
});

app.get("/guitars/:indexOfGuitars", (req, res) => {
  res.send("By Brand: " + guitars[req.params.indexOfGuitars].brand);
});

app.get("/index", (req, res) => {
  res.render("Index", { guitars });
});

app.get("/history/:indexOfHistory", function (req, res) {
  res.render("Facts", history[req.params.indexOfHistory]);
});

app.get("/history/", (req, res) => {
  res.render("Facts", { history });
});

app.get('/cart',(req,res)=>{
    res.send('Item added to cart' + ' <br> <a href=/index>back</a>')
})

//listener
app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});

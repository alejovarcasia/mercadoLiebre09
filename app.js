const express = require("express");
const app = express();
const path = require("path");
const puerto = process.env.PORT || '3000';

app.use(express.static(path.join(__dirname, './public')));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./view/index.html"));
});
app.get("/create",(req,res)=>{
  res.sendFile(path.join(__dirname, "./view/create.html"))
})
app.get("/login",(req,res)=>{
  res.sendFile(path.join(__dirname, "./view/login.html"))
})

app.listen(puerto, () => console.log(`escuchando en el puerto ${puerto}`));
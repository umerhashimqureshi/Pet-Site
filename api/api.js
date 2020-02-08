var express = require("express");
var cors = require("cors");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
mongoose
  .connect("mongodb://localhost/Cart")
  .then(() => console.log("Connected to db"));

const cartSchema = mongoose.Schema({
  id: Number,
  title: String,
  desc: String,
  price: String
});

const userSchema = mongoose.Schema({
  firstName: String,
  secondName: String,
  address: String,
  email: String,
  num: Number
});

const cartModel = mongoose.model("cartItems", cartSchema);
const userModel = mongoose.model("users", userSchema);

app.post("/addCart", (req, res) => {
  var newE = new cartModel({
    id: req.body.id,
    title: req.body.title,
    desc: req.body.desc,
    price: req.body.price
  });
  newE.save();
  //songCP.push(newS);
  console.log(newE);
});

app.post("/addCartIncrement", (req, res) => {
  var checkE = new cartModel({
    id: req.body.id,
    title: req.body.title,
    desc: req.body.desc,
    price: req.body.price
  });
  checkE.save();
  //songCP.push(newS);
  console.log(checkE);
});
// app.delete("/deleteFromCart",(req,res)=>{
//     cartModel.deleteOne=({ id:req.body.id}, function(err){
//         if(err){
//             res.json(err);
//             console.log(err);
//         }
//         else{
//             res.json("Successfully removed");
//             console.log("Succefully removed");
//         }
//     })
// });

app.delete("/deleteCart/:id", (req, res) => {
  cartModel.deleteMany({ id: req.params.id }, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Successful deletion");
    }
  });
});

app.delete("/deleteCartDecrement/:id", (req, res) => {
  cartModel.deleteMany({ id: req.params.id }, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Successful deletion");
    }
  });
});

app.post("/saveUser", (req, res) => {
  var checkU = new userModel({
    firstName: req.body.firstName,
    secondName: req.body.secondName,
    address: req.body.address,
    email: req.body.email,
    num: req.body.num
  });
  checkU.save();
  //songCP.push(newS);
  console.log(checkU);
});

// app.post("http://localhost:4000/saveUser",(req,res)=>{
//     var checkU = new userModel({
//         firstName=req.body.firstName,
//         secondName=req.body.secondName,
//         address=req.body.address,
//         email=req.body.email,
//         num=req.body.num
// });
//     checkU.save();
//     console.log("User added");
// });

app.listen(4000, () => {
  console.log("Listening at 4000");
});

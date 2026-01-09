let express = require("express");
const studentRouting = require("./router/studentRouting");
let cors = require("cors");
const signupRouting = require("./router/signupRouting");
const treatmentRouting = require("./router/treatmentRouting");
const offerRouting = require("./router/offerRouting");
const doctorRouting = require("./router/doctorRouting");
let app = express();
require("./db/dbconfig")

app.use(cors())
app.use(express.json());
app.use("/",studentRouting);
app.use("/",signupRouting);
app.use("/",treatmentRouting);
app.use("/",offerRouting);
app.use("/",doctorRouting);

app.listen(4000,()=>console.log("Server Started at Port 4000"));
let express = require("express");
let cors = require("cors");
const signupRouting = require("./router/signupRouting");
const treatmentRouting = require("./router/treatmentRouting");
const offerRouting = require("./router/offerRouting");
const doctorRouting = require("./router/doctorRouting");
const appointmentRouting = require("./router/appointmentRouting");
let app = express();
require("./db/dbconfig")
//CORS 
app.use(cors());
// BODY PARSER
app.use(express.json());
app.use("/",signupRouting);
app.use("/",treatmentRouting);
app.use("/",offerRouting);
app.use("/",doctorRouting);
app.use("/",appointmentRouting)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
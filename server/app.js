let express = require("express");
let cors = require("cors");
const signupRouting = require("./router/signupRouting");
const treatmentRouting = require("./router/treatmentRouting");
const offerRouting = require("./router/offerRouting");
const doctorRouting = require("./router/doctorRouting");
const appointmentRouting = require("./router/appointmentRouting");
let app = express();
require("./db/dbconfig")
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // allow Postman & server calls
    if (
      origin.includes("vercel.app") ||
      origin === "http://localhost:3000"
    ) {
      return callback(null, true);
    }
    callback(new Error("Not allowed by CORS"));
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};
//CORS 
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

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
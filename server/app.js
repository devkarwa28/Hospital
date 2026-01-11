let express = require("express");
let cors = require("cors");
const signupRouting = require("./router/signupRouting");
const treatmentRouting = require("./router/treatmentRouting");
const offerRouting = require("./router/offerRouting");
const doctorRouting = require("./router/doctorRouting");
const appointmentRouting = require("./router/appointmentRouting");
let app = express();
require("./db/dbconfig")

// ✅ CORS — MUST be FIRST
app.use(cors({
  origin: "https://hospital-chi-bay.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://hospital-chi-bay.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// ... your routes

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
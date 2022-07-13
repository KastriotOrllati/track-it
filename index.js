const express = require("express");
const cors = require("cors");
const models = require("./models");

const userRouter = require("./routes/userRoute");
const signinRouter = require("./routes/authRoute");
const detailsRouter = require("./routes/detailRoute");
const ordersRouter = require("./routes/orderRoute");
const locationRouter = require("./routes/locationRoute");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/signin", signinRouter);
app.use("/details", detailsRouter);
app.use("/orders", ordersRouter);
app.use("/location", locationRouter);

// {force:true}
try {
  models.sequelize
    .sync()
    .then(function () {
      app.listen(3000, () => {
        console.log("app is running on port 3000");
      });
    })
    .catch((err) => console.log(err));
} catch (error) {
  console.log(err);
}

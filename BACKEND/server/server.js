import express from "express";
import usersRoutes from "../routes/routes.js";
const app = express();

app.use("/", usersRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

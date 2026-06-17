const express = require("express");
const cors = require("cors");


const videoRouter = require("./routes/videoRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/videos", videoRouter);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
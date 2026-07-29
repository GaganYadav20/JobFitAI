const app = require("./src/app");
require("dotenv").config();
const connectToDB = require("./src/config/database");

connectToDB();
app.listen(3000, () => {
  console.log(` sever is runnig on port 3000`);
});

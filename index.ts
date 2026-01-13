import app from "./src/app.js";
import { connectToDB } from "./src/config/mongoose.js";

const PORT = process.env.PORT || 8080;

connectToDB();

app.listen(PORT, () => {
  console.log(`App listening on PORT http://localhost:${PORT} 🚀`);
});

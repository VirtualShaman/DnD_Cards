const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

require("./server/config/mongoose.config");

//Make sure this line is close to the top. Above routes
app.use(express.json(), express.urlencoded({extended:true}));
app.use(cors())

const AllMySpellRoutes = require("./server/routes/spell.routes");
AllMySpellRoutes(app);

const AllMyFeatRoutes = require("./server/routes/feat.routes");
AllMyFeatRoutes(app);

const AllMyClassFeatRoutes = require("./server/routes/classfeat.routes");
AllMyClassFeatRoutes(app);

app.listen(port, () => console.log(`Running on port ${port}!!`));
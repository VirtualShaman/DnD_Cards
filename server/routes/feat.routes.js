const FeatController = require("../controllers/feat.controller")

module.exports = app => {
    app.post("/api/feats/create", FeatController.createFeat);

    app.get("/api/feats/:_id", FeatController.findOneFeat);

    app.get("/api/feats", FeatController.findAllFeats);

    app.put("/api/feats/update/:_id", FeatController.updateFeat);

    app.delete("/api/feats/delete/:_id", FeatController.deleteFeat);
}
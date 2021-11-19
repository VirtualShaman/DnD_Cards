const ClassFeatController = require("../controllers/classfeat.controller")

module.exports = app => {
    app.post("/api/classfeats/create", ClassFeatController.createClassFeat);

    app.get("/api/classfeats/:_id", ClassFeatController.findOneClassFeat);

    app.get("/api/classfeats", ClassFeatController.findAllClassFeats);

    app.put("/api/classfeats/update/:_id", ClassFeatController.updateClassFeat);

    app.delete("/api/classfeats/delete/:_id", ClassFeatController.deleteClassFeat);
}
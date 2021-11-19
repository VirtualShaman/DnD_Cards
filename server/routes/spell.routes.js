const SpellController = require("../controllers/spell.controller")

module.exports = app => {
    app.post("/api/spells/create", SpellController.createSpell);

    app.get("/api/spells/:_id", SpellController.findOneSpell);

    app.get("/api/spells", SpellController.findAllSpells);

    app.put("/api/spells/update/:_id", SpellController.updateSpell);

    app.delete("/api/spells/delete/:_id", SpellController.deleteSpell);
}
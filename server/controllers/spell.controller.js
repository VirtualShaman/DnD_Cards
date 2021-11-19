const Spell = require("../models/spell.model");

module.exports.createSpell = (req, res) => {
    Spell.create(req.body)
        .then(newSpell => res.json(newSpell))
        .catch(err => res.json({message: "Something went wrong when creating a spell", err: err}))
}

module.exports.findOneSpell = (req, res) => {
    Spell.findOne({_id: req.params._id})
        .then(oneSpell => res.json(oneSpell))
        .catch(err => res.json({message: "Something went wrong when finding a spell", err: err}))
}

module.exports.findAllSpells = (req, res) => {
    Spell.find()
        .then(allSpells => res.json(allSpells))
        .catch(err => res.json({message: "Something went wrong when finding all the spells", err: err}))
}

module.exports.updateSpell = (req, res) => {
    Spell.findOneAndUpdate({_id: req.params._id}, req.body)
        .then(updatedSpell => res.json(updatedSpell))
        .catch(err => res.json({message: "Something went wrong when updating a spell", err: err}))
}

module.exports.deleteSpell = (req, res) => {
    Spell.deleteOne({_id: req.params._id})
        .then(deletedSpell => res.json(deletedSpell))
        .catch(err => res.json({message: "Something went wrong when deleting a spell", err: err}))
}
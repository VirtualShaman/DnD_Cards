const Feat = require("../models/feat.model");

module.exports.createFeat = (req, res) => {
    Feat.create(req.body)
        .then(newFeat => res.json(newFeat))
        .catch(err => res.json({message: "Something went wrong when creating a feat", err: err}))
}

module.exports.findOneFeat = (req, res) => {
    Feat.findOne({_id: req.params._id})
        .then(oneFeat => res.json(oneFeat))
        .catch(err => res.json({message: "Something went wrong when finding a feat", err: err}))
}

module.exports.findAllFeats = (req, res) => {
    Feat.find()
        .then(allFeats => res.json(allFeats))
        .catch(err => res.json({message: "Something went wrong when finding all the feats", err: err}))
}

module.exports.updateFeat = (req, res) => {
    Feat.findOneAndUpdate({_id: req.params._id}, req.body)
        .then(updatedFeat => res.json(updatedFeat))
        .catch(err => res.json({message: "Something went wrong when updating a feat", err: err}))
}

module.exports.deleteFeat = (req, res) => {
    Feat.deleteOne({_id: req.params._id})
        .then(deletedFeat => res.json(deletedFeat))
        .catch(err => res.json({message: "Something went wrong when deleting a feat", err: err}))
}
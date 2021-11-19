const ClassFeat = require("../models/classfeat.model");

module.exports.createClassFeat = (req, res) => {
    ClassFeat.create(req.body)
        .then(newClassFeat => res.json(newClassFeat))
        .catch(err => res.json({message: "Something went wrong when creating a classfeat", err: err}))
}

module.exports.findOneClassFeat = (req, res) => {
    ClassFeat.findOne({_id: req.params._id})
        .then(oneClassFeat => res.json(oneClassFeat))
        .catch(err => res.json({message: "Something went wrong when finding a classfeat", err: err}))
}

module.exports.findAllClassFeats = (req, res) => {
    ClassFeat.find()
        .then(allClassFeats => res.json(allClassFeats))
        .catch(err => res.json({message: "Something went wrong when finding all the classfeats", err: err}))
}

module.exports.updateClassFeat = (req, res) => {
    ClassFeat.findOneAndUpdate({_id: req.params._id}, req.body)
        .then(updatedClassFeat => res.json(updatedClassFeat))
        .catch(err => res.json({message: "Something went wrong when updating a classfeat", err: err}))
}

module.exports.deleteClassFeat = (req, res) => {
    ClassFeat.deleteOne({_id: req.params._id})
        .then(deletedClassFeat => res.json(deletedClassFeat))
        .catch(err => res.json({message: "Something went wrong when deleting a classfeat", err: err}))
}
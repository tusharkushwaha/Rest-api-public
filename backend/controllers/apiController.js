const apimodel = require("../models/api")
const getDataModel = require("../models/getdatamodel")
exports.getusers = async (req, res) => {
    try {
        const users = await getDataModel.find().limit(Number(req.params.id))
        res.status(200).json({ users })
    } catch (err) {
        res.status(400).json({ success: false, error: err })
    }
}
// ---------------------
exports.postusers = async (req, res) => {
    try {
        const user = await apimodel.create(req.body)
        res.status(201).json({ message: "This user has been saved to the database.", user })
    } catch (err) {
        res.status(400).json({ success: false, error: err })
    }
}

// -------------------------------------
exports.patchusers = async (req, res) => {
    try {
        const user = await apimodel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({ message: "User after changes:", user })
    } catch (err) {
        res.status(400).json({ success: false, error: err })

    }
}
// -------------------------------

exports.putusers = async (req, res) => {
    try {
        const user = await apimodel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({ message: "New User after changes:", user })
    } catch (err) {
        res.status(400).json({ success: false, error: err })

    }
}

// -------------------------------
exports.deleteusers = async (req, res) => {
    try {
        const user = await apimodel.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Deleted the user", user })
    } catch (err) {
        res.status(400).json({ success: false, error: err })
    }
}


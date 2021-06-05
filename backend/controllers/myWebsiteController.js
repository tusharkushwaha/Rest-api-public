const MyWebsiteshema = require("../models/myWebsiteModel")
const sendEmail = require("../utils/sendMail")

exports.message = async (req, res) => {
    try {
        const message = await MyWebsiteshema.create(req.body)
        await sendEmail({
            to: "tushar.kushwaha442000@gmail.com",
            subject: "Message from my website",
            text: `<h1>${req.body.name}</h1>
                <h2>${req.body.email}</h2>
                <p>${req.body.feedback}</p>`

        })
        res.status(201).json({ success: true, message:"Feedback Sent" })
    } catch (err) {
        res.status(500).json({ success: false, error:err })
    }
}

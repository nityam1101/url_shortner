const { URL } = require('../model/URL.js');

exports.shortUrl = async (req, res) => {
    try {
        const dest = req.body.dest;
        if (!dest) return res.status(404).json({ "error": "Destination is not mentioned" });

        const check = await URL.findOne({ dest: dest });
        if (check) return res.status(400).json({ "error": `Alreadey Shorted: http://localhost:3001/url/${check.sort}` });

        const sort = Math.random().toString(36).substring(2, 8);
        await URL.create({ dest: dest, sort: sort });

        res.status(201).json({ "success": `URL Shorted: http://localhost:3001/url/${sort}` });
    } catch (error) { return res.status(500).json({ "error": error.message }); }
}

exports.getURL = async (req, res) => {
    try {
        const sort = req.params.id;

        const check = await URL.findOne({ sort: sort });
        if (!check) return res.status(404).json({ "error": `Not Shorted URL Found` });

        if (!/^https?:\/\//.test(check.dest)) {
            return res.status(400).json({ error: "Invalid URL format. Must start with http:// or https://" });
        }

        return res.redirect(check.dest);
    } catch (error) { return res.status(500).json({ "error": error.message }); }
}
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const router = express.Router();

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, path.join(__dirname,'/uploads/review_file'));
        },
        filename(req, file, done) {
            console.log(req.userId);
            const ext = path.extname(file.originalname);
            const basename = path.basename(file.originalname, ext);
            done(null, basename + new Date().getTime() + ext);
        },
    }),
    limits: {fileSize: 200 * 1024 * 1024}
});

router.post('/insertFile', upload.array('file'), async (req, res) => {
    try {
        console.log(req.userId);
        console.log(req.restaurantId);
    } catch(error) {
        console.log(error);
    }
    res.json(req.files);
});

router.post('/insert', (req, res) => {
    console.log(req.body);
    return res.json();
});


module.exports = router;
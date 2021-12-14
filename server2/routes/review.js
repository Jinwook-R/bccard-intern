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
            const ext = path.extname(file.originalname);
            const basename = path.basename(file.originalname, ext);
            done(null, basename + new Date().getTime() + ext);
        },
    }),
    limits: {fileSize: 20 * 1024 * 1024}
});

router.post('/images', upload.array('image'), (req, res, next) => {
    res.json(req.files.map((v) => v.name));
})

router.post('/insertFile', upload.array('file'), async (req, res) => {
    console.log(req.file,'!!!!!!!!!!!!!!!!!!!!!');
    try {
        // console.log(req);
    } catch(error) {
        // console.log(error);
    }
    res.json(req.files)
});

module.exports = router;
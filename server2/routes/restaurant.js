const express = require('express');
const fs = require('fs');
const router = express.Router();
const { Restaurant, RestaurantFile, RestaurantMenu } = require('../models');
const url = require('url');

router.get('/img', async (req, res) => {
    try {
        const fileNo = req.query.fileNo;
        const restaurantFile = await RestaurantFile.findOne({
            where : { fileNo }
        });

        const {fileName} = restaurantFile;
        const filename = __dirname+`/uploads/restaurant_file/${fileName}.png`;

        fs.readFile(filename,
            function (err, data)
            {
                res.writeHead(200, { "Context-Type": "image/jpg" }); //보낼 헤더를 만듦
                res.end(data);  //클라이언트에게 응답을 전송한다
            }
        );
    }catch(error){
        console.log(error);
    }
});

router.get('/list',async (req, res, next) => {

    console.log('restaurant/list called!');

    try {
        const restaurantList = await Restaurant.findAll({
            include: [{
                model: RestaurantFile
            },
            {
                model: RestaurantMenu
            }
        ],
        });
        return res.json(restaurantList);
    } catch (error) {
        console.error(error);
        return next(error);
    }
});

module.exports = router;
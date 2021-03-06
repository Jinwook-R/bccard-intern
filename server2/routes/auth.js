const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { User } = require('../models');
const router = express.Router();

// 클라이언트에서 새로고침 할 때마다 실행되는 요청
router.post('/', async (req, res, next) => {
    try {
        console.log(req.body.id);
        if(req.body.id){
            const user = await User.findOne({
                where: {id: req.body.id}
            });

            res.status(200).json(user);
        } else {
            res.status(200).json(null);
        }
    }catch(error){
        console.error(error);
        next(error);
    }
})
//https://map.kakao.com/?map_type=TYPE_MAP&target=car&rt=526809%2C1066531%2C498084%2C1128830&rt1=%EB%82%B4%EC%9C%84%EC%B9%98&rt2=%EC%82%AC%EB%9E%91%EB%B0%A9%EC%B9%BC%EA%B5%AD%EC%88%98&rtIds=%2C&rtTypes=%2C
router.post('/signup', isNotLoggedIn, async (req, res, next) => {
    const { id, password, username, department, rankType, userType } = req.body;
    try {
        const exUser = await User.findOne({ where: { id } });
        if (exUser) {
            return res.json(); //이미 존재하는 회원
        }
        const hash = await bcrypt.hash(password, 12); // 비밀번호 hash화 해서 생성
        await User.create({
            id,
            password: hash,
            username,
            department,
            rankType,
            userType
        });
        return res.json();
    } catch (error) {
        console.error(error);
        return next(error);
    }
});

router.post('/login', isNotLoggedIn, (req, res, next) => {
    passport.authenticate('local', (authError, user, info) => {
        if (authError) {
            return next(authError);
        }

        if (!user) {
            return res.status(401).json('아이디 또는 비밀번호를 확인하세요.');
        }

        return req.login(user, (loginError) => {
            if (loginError) {
                console.error(loginError);
                return next(loginError);
            }
            console.log('login: ', user);
            return res.status(200).json(user);
        });
  })(req, res, next);
});

router.post('/logout', (req, res) => {
    console.log(req);
    req.logout();
    req.session.destroy();
    return res.json();
});

module.exports = router;
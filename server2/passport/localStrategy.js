const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const { User } = require('../models');

module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField: 'id', // req.body.id
        passwordField: 'password', // req.body.password
    }, async (id, password, done) => {
        try {
            const exUser = await User.findOne({ where: {id} });
            console.log(exUser);
            if (exUser) {
            const result = await bcrypt.compare(password, exUser.password); //비밀번호 비교
            console.log(result);
            if (result) {
                done(null, exUser); //로그인 성공 시 사용자 객체 넣어줌
            } else {
                done(null, false, { message: '비밀번호가 일치하지 않습니다.' }); //로그인 실패
            }
        } else {
            done(null, false, { message: '가입되지 않은 회원입니다.' }); // 로그인 실패
        }
        } catch (error) {
            console.error(error);
            done(error);
        }
    }));
};
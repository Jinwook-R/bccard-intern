const passport = require('passport');
const local = require('./localStrategy'); //이메일 비밀번호
const { User } = require('../models');

module.exports = () => {
  //로그인 탓을 때 여기로 들어옴
  passport.serializeUser((user, done) => {
    done(null, user.id); //cookie랑 userId 가져옴, 세션에 사용자 아이디 저장, 첫 번째 인자가 서버 에러
  });
  
  // db에서 user데이터 가져옴
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ where: { id } })
        .then(user => done(null, user)) // 미들웨어에서 req.user 하면 사용자 정보 나온다. req.isAuthenticated()일 때 true가 나온다.
        .catch(err => done(err));
    } catch(error){
        console.log(error);
        done(error);
    }
  });
  local();
};
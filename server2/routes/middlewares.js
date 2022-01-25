//로그인 한 사람들만 로그인 통과
exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(403).send('로그인 필요');
    }
};

exports.isNotLoggedIn = (req, res, next) => {
      //로그인을 안 한 상태여야 통과한다.
    if (!req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/');
    }
};  
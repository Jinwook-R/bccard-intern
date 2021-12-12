const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const dotenv = require('dotenv');
const passport = require('passport');
const cors = require('cors');
const {sequelize, User} = require('./models');
const passportConfig = require('./passport');
const bodyParser = require('body-parser');

sequelize.sync({force: false})
    .then(() => {
        console.log('DB연결 성공!');  
    })
    .catch((err) => {
        console.log(err);
    });

dotenv.config();

const authRouter = require('./routes/auth');
const reviewRouter = require('./routes/review');
const restaurantRouter = require('./routes/restaurant');
const router = require('./routes/auth');

const app = express();
passportConfig();
app.set('port', process.env.PORT || 8080);

app.use(bodyParser.json());
app.use(cors({
    origin:"*",
    credentials: true,

}));

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/img', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
    },
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRouter);
app.use('/review', reviewRouter);
app.use('/restaurant', restaurantRouter);

app.use((req, res, next) => {
    const error =  new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기중');
});
import express from "express"
import bodyParser from 'body-parser'
import config from "./config"
import userRouter from './user';
import loginRouter from './login';
import roleRouter from './role';
import rightRouter from './right';
import menusRouter from './menus';
let app = express();
app.use(bodyParser.json()) // 解析post的body式传参必写

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Authorization,token,Content-Type");
  next();
});
app.use('/login', loginRouter);
app.use('/users', userRouter);
app.use('/roles', roleRouter);
app.use('/rights', rightRouter);
app.use('/menus', menusRouter);

app.listen(config.PORT, () => {
  console.log(`App running at: \n- Local: http://:${config.SERVER}:${config.PORT}  \n- you can be successful`)
})

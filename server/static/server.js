import express from "express"
import bodyParser from 'body-parser'
import Mock from "mockjs"
import userRouter from './user';
import loginRouter from './login';
let app = express();
app.use(bodyParser.json()) // 解析post的body式传参必写

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use('/users', userRouter);
app.use('/login', loginRouter);

process.env.NODE_ENV = 'http://localhost:9999'
app.listen('9999', () => {
  console.log(`App running at: \n- Local: ${process.env.NODE_ENV}  \n- you can be successful`)
})

const express = require('express')
const app = express()
const port = 5000
const bodyparser = require('body-parser');
const config = require('./config/key');
const { User } = require("./models/user");  // userSchema model 정보

// application/x-www-form-urlencodeded 타입의 데이타를 분석할 수 있도록 해줌
app.use(bodyparser.urlencoded({extended: true}));

// application/json 타입의 데이타를 분석할 수 있도록 해줌
app.use(bodyparser.json());


const mongoose = require('mongoose')
// mongoose.connect('mongodb+srv://asholy:qazwsx21@boilerplate.viouz.mongodb.net/test?retryWrites=true&w=majority').then(() => console.log('MogoDB Connect Success!!!!'))
//   .catch(err => console.log(err))

mongoose.connect(config.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
        .then(() => console.log('MogoDB Connect Success!!!!'))  
        .catch(err => console.log(err))

app.get('/', (req,res) => res.send('userInfomation Save'))
app.post('/register',(req,res) => {
    // 1.회원등록 정보 수신
    // 2.수신된 정보 회원 테이블에 저장

    const user = new User(req.body)  // client에서 전송된 form 데이타를 수신

    user.save((err,userInfo) => {
        if (err) return res.json({success: false, err}) // 저장 실패인 경우

        return res.status(200).json({success: true}) // 저장 성공인 경우 

    }) // mongoDB의 user document(table)에 저장 


})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


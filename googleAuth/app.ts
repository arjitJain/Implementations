import express from 'express';
import { googleOauthHandler } from './googleAuthHandler';
const app = express();
import  getGoogleOAuthURL  from './googleAuthUrl';
app.set('view engine','ejs');
app.get('/',(req:any,res:any)=>{
res.render('index',{
  getGoogleOAuthURL
})
});

app.get('/auth',googleOauthHandler);

app.listen(2001,()=>{
  console.log('heelo')
})
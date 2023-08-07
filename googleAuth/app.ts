import express from 'express';
import { googleOauthHandler } from './googleLogin/googleAuthHandler';
import {githubUserDetails} from './github/userDetails'
import { facebookAuth } from './facebook/facebookAuth'
const app = express();
import  getGoogleOAuthURL  from './googleLogin/googleAuthUrl';
import {githubAuth} from './github/auth'
import axios from 'axios';
import {facebookUserDetails} from './facebook/userDetails'

app.set('view engine','ejs');
app.get('/',(req:any,res:any)=>{
res.render('index',{
  getGoogleOAuthURL,
  githubAuth,
  facebookAuth
})
});
app.get('/home',googleOauthHandler);

// login with github
app.get('/auth',githubAuth);
app.get('/gitHubPage',githubUserDetails);

//facebook login
app.get('/login/facebook',facebookAuth );
app.get('/facebookHome',facebookUserDetails);

app.listen(2001,()=>{
  console.log('heelo')
})
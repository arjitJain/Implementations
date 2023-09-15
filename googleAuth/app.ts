import express from 'express';
import { googleOauthHandler } from './googleLogin/googleAuthHandler';
import {githubUserDetails} from './github/userDetails'
import { facebookAuth } from './facebook/facebookAuth'
const app = express();
import  getGoogleOAuthURL  from './googleLogin/googleAuthUrl';
import {githubAuth} from './github/auth'
import {facebookUserDetails} from './facebook/userDetails'
import { linkedinAuth } from './linkedIn/linkedinAuth';
import { linkedinUserDetails } from './linkedIn/linkedinUserDetails';

app.set('view engine','ejs');
app.get('/',(req:any,res:any)=>{
res.render('index',{
  getGoogleOAuthURL,
  githubAuth,
  facebookAuth,
  linkedinAuth
})
});
app.get('/home',googleOauthHandler);

// login with github
app.get('/auth',githubAuth);
app.get('/gitHubPage',githubUserDetails);

//facebook login
app.get('/login/facebook',facebookAuth );
app.get('/facebookHome',facebookUserDetails);

//linkedin login
app.get('/login/linkedin',linkedinAuth );
app.get('/linkedinHome',linkedinUserDetails);


app.listen(2001,()=>{
  console.log('heelo')
})
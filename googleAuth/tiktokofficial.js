const express = require('express');
const app = express();
const axios = require('axios');



const CLIENT_KEY = 'awfng0ha5yoc82sk'; // this value can be found in the app's developer portal
const SERVER_ENDPOINT_REDIRECT = 'https://f2c5-103-9-12-67.ngrok-free.app/oauth/auth/callback';
app.get('/oauth/auth/callback',(req,res)=>{
  res.send('hwllllllllloooooo')
})
app.get('/oauth', (req, res) => {
    const csrfState = Math.random().toString(36).substring(2);

    // Set the CSRF token as a cookie
    res.cookie('csrfState', csrfState, { maxAge: 60000 });

    // Construct the TikTok authorization URL
    const url = `https://www.tiktok.com/v2/auth/authorize?` +
        `client_key=${CLIENT_KEY}&` +
        `scope=user.info.basic&` +
        `response_type=code&` +
        `redirect_uri=${SERVER_ENDPOINT_REDIRECT}&` +
        `state=${csrfState}`;

    // Send a redirect response to the TikTok authorization URL
    res.redirect(url);
});
app.listen(process.env.PORT || 5000);
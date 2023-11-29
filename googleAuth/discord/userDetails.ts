import axios from 'axios';
export async function discordUserDetails(req:any,res:any){
  const clientId = '1179427459578470442';
  const clientSecret = '8B6Vv9KNhP2avRQuYZj_SGun-k3sRF-g';
  const redirectUri = 'http://localhost:2001/discordHome';
  const code = req.query.code;
  const querystring = require('querystring');

  try {

    const url = 'https://discord.com/api/oauth2/token';
const data = {
  grant_type:'authorization_code',
  code: code,
  client_id: clientId,
  client_secret:clientSecret,
  redirect_uri: redirectUri
};

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }
};

const response = await axios.post(url, querystring.stringify(data), config);
console.log(response,"==========")
console.log(response.data.access_token)
const userData = await axios({
  url:`https://discordapp.com/api/users/@me`,
  method:'get',
  headers:{
    Authorization:`Bearer ${response.data.access_token}`
  }
})
console.log(userData)
 
    res.send('Logged in with discord successfully!');
  } catch (error) {
    console.error('Error during discord login:', error);
    res.status(500).send('Failed to log in with discord.');
  }
}
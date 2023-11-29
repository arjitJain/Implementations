import axios from 'axios';
export async function amazonUserDetails(req:any,res:any){
  const clientId = 'amzn1.application-oa2-client.e84d09eebd9e47efa11902fcf49c5d44';
  const clientSecret = 'amzn1.oa2-cs.v1.76f589549d42b38ed5f4e0f256f2c51b9ce065c21ed5348c177b3b0100b73102';
  const redirectUri = 'http://localhost:2001/amazonHome';
  const code = req.query.code;
  const querystring = require('querystring');

  try {

    const url = 'https://api.amazon.com/auth/o2/token';
console.log(code)
const data = {
  grant_type:'authorization_code',
  code: code,
  client_id: clientId,
  client_secret:clientSecret,
  code_verifier:'5CFCAiZC0g0OA-jmBmmjTBZiyPCQsnq_2q5k9fD-aAY',
  redirect_uri: redirectUri
};

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }
};

const response = await axios.post(url, querystring.stringify(data), config);
console.log(response.data.access_token)
const userData = await axios({
  url:`https://api.amazon.com/user/profile`,
  method:'get',
  headers:{
    Authorization:`Bearer ${response.data.access_token}`
  }
})
console.log(userData)
 
    res.send('Logged in with amazon successfully!');
  } catch (error) {
    console.error('Error during amazon login:', error);
    res.status(500).send('Failed to log in with amazon.');
  }
}
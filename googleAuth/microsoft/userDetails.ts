import axios from 'axios';
import qs from 'qs';
export async function microsoftUserDetails(req:any,res:any){

  try {
  const code = req.query.code;

    const requestBody = {
      client_id: '31664942-46e4-440a-9ebf-eb30c5a27bd4',
      scope: 'user.read',
      code,
      redirect_uri: 'http://localhost:2001/redirect/',
      grant_type: 'authorization_code',
      code_verifier: 'TBLmOoe9Eu9-bcX1rOfOTwPEbrXDyenXNT8_zRNSFnM',
      client_secret: 'KQ~8Q~DG6lpaMB2V0VWKrSsZb9Sty-d.~S1Udb2G', // NOTE: Only required for web apps. This secret needs to be URL-Encoded.
    };
    
    const url = 'https://login.microsoftonline.com/consumers/oauth2/v2.0/token'; // Replace {tenant} with your actual tenant ID
    console.log(qs.stringify(requestBody))
    const response = await axios.post(url, qs.stringify(requestBody), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    console.log(response.data)
  const url1 = 'https://graph.microsoft.com/v1.0/me';

const data = await axios.get(url1, {
  headers: {
    Authorization: `Bearer ${response.data.access_token}`,
  },
})
console.log(data)

    // Redirect the user to a success page or send a response
    res.send('Logged in with microsoft successfully!');
  } catch (error) {
    console.error('Error during microsoft login:', error);
    res.status(500).send('Failed to log in with microsoft.');
  }
}
const axios = require('axios');
const clientId = 'TDVsX2ZqZDVNMEdQZkN1SnZCa2U6MTpjaQ';
const clientSecret = 'yWJe3D-RVWX_kDni4u6eZx_F4wfMqP-wne0-nkqbbIW5MI13_-';

axios
  .post('https://api.twitter.com/oauth2/token', null, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
    },
    data: 'grant_type=client_credentials',
  })
  .then((response) => {
    const bearerToken = response.data.access_token;
    // You can use this bearer token for making authenticated requests to Twitter's API.
    console.log('Bearer Token:', bearerToken);
  })
  .catch((error) => {
    console.error('Error obtaining bearer token:', error);
  });

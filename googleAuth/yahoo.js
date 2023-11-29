const axios = require('axios');

async function yahoo(){


  const clientId = 'dj0yJmk9VUFucFF6TlJqSnlIJmQ9WVdrOU0weDRRV2w0WkVzbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWM5';
  const clientSecret = 'd96472c1e28c7d302f8e8f4e295957c3249db3e3';
  const redirectUri = 'https://www.google.com';
  const code = 'bf2rjhqu93yty4782cp4p2spas2raetk'; // Replace with the authorization code obtained from the user's authorization flow
  
  const tokenEndpoint = 'https://api.login.yahoo.com/oauth2/get_token';
  
  const data = {
    client_id: clientId,
    client_secret: clientSecret,
    redirect_uri: redirectUri,
    code: code,
    grant_type: 'authorization_code'
  };
  
  const response  = await axios.post(tokenEndpoint, new URLSearchParams(data));
  // console.log(response)
  
  const userInfoEndpoint = 'https://api.login.yahoo.com/openid/v1/userinfo'
  console.log(response.data.access_token)
  const config = {
    headers: {
      Authorization: `Bearer ${response.data.access_token}`
    },
  };
  
  const user = await axios.get(userInfoEndpoint, config);
  console.log(user)
//   const sub = user.data



// const config1 = {
//   headers: {
//     Authorization: `Bearer ${response.data.access_token}`
//   },
//   params: {
//     sub // Include the user's sub value as a parameter if needed by the endpoint
//   }
// };

// const res = await axios.get(userInfoEndpoint, config1)

}
yahoo();
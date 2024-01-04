const axios = require('axios');
// express server boilerplate


async function reddit(){
    const REDDIT_CLIENT_ID = 'bO0Cz8mlwN8P6OpRJU5fSw'
    const REDDIT_CLIENT_SECRET = 'T_J2hebwaOmcMfpEafuYJZyiblyrig'
    const encodedHeader = Buffer.from(`${REDDIT_CLIENT_ID}:${REDDIT_CLIENT_SECRET}`).toString("base64");
const code = '3LmHYPGU7KU93YM343U5Hl_FAuCLGQ'
    const accessTokenResponse = await axios.post(
      'https://www.reddit.com/api/v1/access_token',
      `grant_type=authorization_code&code=${code}&redirect_uri=https://www.google.com`,
      {
        headers: {
          'Authorization': `Basic ${encodedHeader}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    const accessTokenData = accessTokenResponse;
    console.log(accessTokenData);

    // // GET USER INFORMATION
    // const userResponse = await axios.get('https://oauth.reddit.com/api/v1/me', {
    //   headers: {
    //     'Authorization': `bearer ${accessTokenData.access_token}`,
    //   },
    // });
    // const userData = userResponse.data;
    // console.log(userData.name);
}
    
reddit();


// ... other endpoints

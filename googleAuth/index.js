const OAuth = require('oauth');
const readline = require('readline');

const consumerKey = 'D9KCkrJUwjH29G7GgF7EJoNYD';
const consumerSecret = 'YZ2Bf7qlZ5ykqduN4sPL42c08enrAGESZYoo2VlZsi8THihHdP';

const oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  consumerKey,
  consumerSecret,
  '1.0A',
  null,
  'HMAC-SHA1'
);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Step 1: Get a request token
oauth.getOAuthRequestToken((error, requestToken, requestTokenSecret, results) => {
  if (error) {
    console.error('Error getting request token:', error);
    rl.close();
  } else {
    console.log('Request Token:', requestToken);

    // Step 2: Redirect user to Twitter authorization URL
    const authUrl = `https://api.twitter.com/oauth/authorize?oauth_token=${requestToken}`;
    console.log('Please visit the following URL to authorize your app:');
    console.log(authUrl);

    // Step 3: Get user's verifier code
    rl.question('Enter the verifier code: ', (verifier) => {
      rl.close();

      // Step 4: Exchange the request token for an access token
      oauth.getOAuthAccessToken(requestToken, requestTokenSecret, verifier, (error, accessToken, accessTokenSecret, results) => {
        if (error) {
          console.error('Error getting access token:', error);
        } else {
          console.log('Access Token:', accessToken);
          console.log('Access Token Secret:', accessTokenSecret);
        }
      });
    });
  }
});

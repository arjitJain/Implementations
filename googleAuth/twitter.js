const OAuth = require('oauth-1.0a');
const axios = require('axios');
const crypto = require('crypto')

// Twitter App Credentials
const consumerKey = '1aHiJvimCAK0XPggRKOop3Wud';
const consumerSecret = 'ltETHMyOakj7btezZGV4bNWcDhaOEhAo2jrfujURlZCkMWbZcz';
const userAccessToken = '736070576767270912-c4WJyeOnzLKUqbHlrp9fwjS391r25iK'; // The user's OAuth token
const userAccessTokenSecret = 'LstvrFu7SgBGyhLoob5Ho27HnqKDAXiSk3tBn0HGCBwiR'; // The user's OAuth token secret

const oauth = OAuth({
  consumer: {
    key: consumerKey,
    secret: consumerSecret,
  },
  signature_method: 'HMAC-SHA1',
  hash_function(base_string, key) {
    return crypto
      .createHmac('sha1', key)
      .update(base_string)
      .digest('base64');
  },
});

// Tweet data
const tweetText = 'Hello, Twitter API!';

// Create the OAuth headers for the request
const requestData = {
  url: 'https://api.twitter.com/1.1/statuses/update.json',
  method: 'POST',
  data: {
    status: tweetText,
  },
};

const authorization = oauth.authorize(requestData, {
  key: userAccessToken,
  secret: userAccessTokenSecret,
});

// Make the authenticated request to post a tweet
axios.post(requestData.url, null, {
  headers: {
    Authorization: oauth.toHeader(authorization),
  },
  params: requestData.data,
})
  .then((response) => {
    console.log('Tweet posted:', response.data);
  })
  .catch((error) => {
    console.error('Error posting tweet:', error);
  });

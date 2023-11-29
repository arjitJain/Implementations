export function twitterAuth(){
  const appId = "696664209179808";
  const redirectUri = 'http://localhost:2001/twitterHome';
  // Redirect the user to the Facebook login page
  return `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=TDVsX2ZqZDVNMEdQZkN1SnZCa2U6MTpjaQ&redirect_uri=${redirectUri}&scope=tweet.read%20users.read%20follows.read%20follows.write&state=state&code_challenge=challenge&code_challenge_method=plain`
}
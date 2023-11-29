export function discordAuth(){
  const appId = "696664209179808";
  const redirectUri = 'http://localhost:2001/facebookHome';
  // Redirect the user to the Facebook login page
  return 'https://discord.com/api/oauth2/authorize?client_id=1179427459578470442&redirect_uri=http%3A%2F%2Flocalhost%3A2001%2FdiscordHome&response_type=code&scope=email%20identify'
}
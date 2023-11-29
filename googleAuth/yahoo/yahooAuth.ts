export function yahooAuth(){
  const appId = "696664209179808";
  const redirectUri = 'https://www.google.com';
  // Redirect the user to the Facebook login page
  return `https://api.login.yahoo.com/oauth2/request_auth?client_id=dj0yJmk9VUFucFF6TlJqSnlIJmQ9WVdrOU0weDRRV2w0WkVzbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWM5&redirect_uri=https://www.google.com&response_type=code&openid,mail-r`
}
export function facebookAuth(){
  const appId = "696664209179808";
  const redirectUri = 'http://localhost:2001/facebookHome';
  // Redirect the user to the Facebook login page
  return `https://www.facebook.com/v12.0/dialog/oauth?client_id=${appId}&redirect_uri=${redirectUri}`
}
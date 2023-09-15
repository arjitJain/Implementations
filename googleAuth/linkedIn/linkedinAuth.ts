export function linkedinAuth(){
  // const appId = "252520427647204";
  const state = 'your-state-value'; // You can generate a random string for added security
  const redirectUri = 'http://localhost:2001/linkedinHome';
  const YOUR_CLIENT_ID = '86ph4ln6nfbuuh'
  const scope = 'profile email openid w_member_social'; // Specify the desired permissions
  // Redirect the user to the linkedin login page
  return `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${YOUR_CLIENT_ID}&redirect_uri=${redirectUri}&state=${state}&scope=${scope}`
}
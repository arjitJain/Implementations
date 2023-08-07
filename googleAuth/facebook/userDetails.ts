import axios from 'axios';
export async function facebookUserDetails(req:any,res:any){
  const appId = '252520427647204';
  const appSecret = '9b880b7996b48eb655c325ba829d5270';
  const redirectUri = 'http://localhost:2001/facebookHome';
  const code = req.query.code;

  try {
    // Exchange the code for an access token
    const response = await axios.get(
      `https://graph.facebook.com/v12.0/oauth/access_token?client_id=${appId}&redirect_uri=${redirectUri}&client_secret=${appSecret}&code=${code}`
    );

    // Use the access token to get user information
    const accessToken = response.data.access_token;
    const userData = await axios.get(
      `https://graph.facebook.com/v12.0/me?fields=id,name,email&access_token=${accessToken}`
    );

    // Handle the user data as needed (e.g., create a new user, log in, etc.)
    console.log(userData.data);

    // Redirect the user to a success page or send a response
    res.send('Logged in with Facebook successfully!');
  } catch (error) {
    console.error('Error during Facebook login:', error);
    res.status(500).send('Failed to log in with Facebook.');
  }
}
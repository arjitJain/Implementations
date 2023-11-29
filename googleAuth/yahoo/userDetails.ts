import axios from 'axios';
export async function yahooUserDetails(req:any,res:any){
  try{
  const clientId = 'dj0yJmk9Q2o2Y3VJb25XVGtOJmQ9WVdrOVJFdE9TVVJoU0hnbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTQz';
  const redirectUri = 'https://www.google.com';
  const code = req.params.code; // This code should come from the user's authorization process
  
  const tokenEndpoint = 'https://api.login.yahoo.com/oauth2/get_token';
  
  const data = {
    client_id: clientId,
    redirect_uri: redirectUri,
    code: code,
    grant_type: 'authorization_code'
  };
  
  const response = await axios.post(tokenEndpoint, new URLSearchParams(data));

    // Use the access token to get user information
    const accessToken = response;
    console.log(accessToken,"================")
    // const userData = await axios.get(
    //   `https://graph.facebook.com/v12.0/me?fields=id,name,email&access_token=${accessToken}`
    // );
    const userData = await axios({
      url: "https://graph.facebook.com/me",
      method: "get",
      params: {
        fields: [
          "id",
          "email",
          "first_name",
          "last_name",
          "gender",
          "birthday",
          "picture",
        ].join(","),
        access_token: accessToken,
      },
    });

    // Handle the user data as needed (e.g., create a new user, log in, etc.)
    console.log(userData.data);

    // Redirect the user to a success page or send a response
    res.send('Logged in with Facebook successfully!');
  } catch (error) {
    console.error('Error during Facebook login:', error);
    res.status(500).send('Failed to log in with Facebook.');
  }
}
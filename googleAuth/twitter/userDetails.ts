import axios from "axios";

export async function twitterUserDetails(req: any, res: any) {
  // Twitter App Credentials
  const client_id = "TDVsX2ZqZDVNMEdQZkN1SnZCa2U6MTpjaQ";
  const client_secret = "S9tVi6D9D5IZY1xoEWQWZTwNn556oMjHk2y0fbFRC8SoQM_WoE";
  const redirect_uri = "http://localhost:2001/twitterHome";
  const code = req.query.code;

  try {
    // Exchange the code for an access token
    const requestBody = new URLSearchParams();
    requestBody.append('code', code);
    requestBody.append('grant_type', 'authorization_code');
    requestBody.append('client_id', client_id);
    requestBody.append('redirect_uri', redirect_uri);
    requestBody.append('code_verifier', 'challenge');
    
    const response = await axios({
      method: 'post',
      url: 'https://api.twitter.com/2/oauth2/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: requestBody,
    })
    const access_token = response.data.access_token;
    console.log(access_token)
    const data =await axios.get('https://api.twitter.com/2/users/me', {
  headers: {
    Authorization: `Bearer ${access_token}`,
  },
})
console.log(data.data)
// const data1 =await axios.get(`https://api.twitter.com/2/users/by/username/arjitjain03`, {
//   headers: {
//     Authorization: `Bearer ${access_token}`,
//   },
// })
// console.log(data1)

    // Use the access token to get user information
    // const accessToken = response.data.access_token;

    // Handle the user data as needed (e.g., create a new user, log in, etc.)
    
    // Redirect the user to a success page or send a response
    res.send("Logged in with Twitter successfully!");
  } catch (error) {
    console.error("Error during Twitter login:", error);
    res.status(500).send("Failed to log in with Twitter.");
  }
}

import axios from "axios";
export async function gitlabUserDetails(req: any, res: any) {
  const clientId =
    "83cf7ec1cea20a5cf48ccc01cd91c34aa615620a05a2bd4cae4436d1318d0cec";
  const clientSecret =
    "gloas-7b8b14eb31dd2c7d5404d029a56454033f58b1d8a4fcbfc267f218be0cb57d0e";
  const redirectUri = "http://localhost:2001/gitlabHome";
  const code = req.query.code;
  const querystring = require("querystring");

  try {
    const url = "https://gitlab.com/oauth/token";
    console.log(code);
    const data = {
      grant_type: "authorization_code",
      code: code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      scope: "openid email", // Add scopes for user profile and email
    };

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    };

    const response = await axios.post(url, querystring.stringify(data), config);
    console.log(response.data);
    const userData = await axios({
      url: `https://gitlab.com/oauth/userinfo`,
      method: "get",
      headers: {
        Authorization: `Bearer ${response.data.access_token}`,
      },
    });
    console.log(userData);

    res.send("Logged in with gitlab successfully!");
  } catch (error) {
    // console.error("Error during gitlab login:", error);
    res.status(500).send("Failed to log in with gitlab.");
  }
}

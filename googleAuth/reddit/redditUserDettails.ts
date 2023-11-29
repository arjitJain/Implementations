import axios from "axios";
export async function facebookUserDetails(req: any, res: any) {
  try {
    const REDDIT_CLIENT_ID = "bO0Cz8mlwN8P6OpRJU5fSw";
    const REDDIT_CLIENT_SECRET = "T_J2hebwaOmcMfpEafuYJZyiblyrig";
    const encodedHeader = Buffer.from(
      `${REDDIT_CLIENT_ID}:${REDDIT_CLIENT_SECRET}`
    ).toString("base64");
    const code = "TrSU94JJwzCI6hV1ZVfOuuay6wrA-w";
    const accessTokenResponse = await axios.post(
      "https://www.reddit.com/api/v1/access_token",
      `grant_type=authorization_code&code=${code}&redirect_uri=https://www.google.com`,
      {
        headers: {
          Authorization: `Basic ${encodedHeader}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    const accessTokenData = accessTokenResponse.data;
    console.log(accessTokenData);
    // // GET USER INFORMATION
    const userResponse = await axios.get("https://oauth.reddit.com/api/v1/me", {
      headers: {
        Authorization: `bearer ${accessTokenData.access_token}`,
      },
    });
    const userData = userResponse.data;
    console.log(userData);

    // Redirect the user to a success page or send a response
    res.send("Logged in with Facebook successfully!");
  } catch (error) {
    console.error("Error during Facebook login:", error);
    res.status(500).send("Failed to log in with Facebook.");
  }
}
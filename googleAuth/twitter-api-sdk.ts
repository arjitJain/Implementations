import { auth } from "twitter-api-sdk";
import axios from "axios";

const authClient = new auth.OAuth2User({
  client_id: "TDVsX2ZqZDVNMEdQZkN1SnZCa2U6MTpjaQ",
  client_secret: "i4PPksmcU-bzqNT99yL9PPe8W_1F06iYcN-UiV8P7N5orQWNRr",
  callback: "http://127.0.0.1:3000/callback",
  scopes: ["tweet.read", "users.read", "offline.access"],
});

// Generate a code verifier and code challenge
const data = authClient.generateAuthURL({
  code_challenge: "s256",
  state: "state",
});
console.log(data);



const apiUrl = "https://api.twitter.com/2/users/by/username/twitterdev";

// Make the authenticated request
async function getData() {
  const accessToken = await authClient.requestAccessToken(
    "RWZxd1JpTENuWjNvcTBzanhldnEwb0tWZEtucmZVN00zRXRhSGlGclNtWjdjOjE2OTg4NDU2MjMwNjc6MToxOmFjOjE" // Replace with the authorization code
  );

  const headers = await authClient.getAuthHeader() as object
  console.log(accessToken)
  console.log(headers)
  const data = await axios
    .get(apiUrl, {
      headers
    })
    console.log(data)
}
getData();

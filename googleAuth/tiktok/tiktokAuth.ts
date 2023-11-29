export function tiktokAuth() {
  const YOUR_APP_ID = "7295684928586287109";
  const YOUR_REDIRECT_URI = 'http://localhost:2001'; // Change this to your callback URL
  // const scope = 'user.info.basic'; // Specify the necessary TikTok scopes

  // Construct the TikTok authorization URL
  return `https://open-api.tiktok.com/platform/oauth/authorize?client_key=${YOUR_APP_ID}&redirect_uri=${YOUR_REDIRECT_URI}&scope=user.info.basic`;
}

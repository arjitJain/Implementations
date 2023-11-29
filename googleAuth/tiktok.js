const axios = require('axios');
const userAccessToken = 'clt.sf07PXItwsrXDjW3fhidQGunlffEVmGsV0DMo5nMolRsX9TLj8e1HNV7Knd1'; // Replace with the user's access token

async function getUserInfo() {
  try {
    const response = await axios.get('https://api.tiktok.com/aweme/v1/user', {
      params: {
        access_token: userAccessToken,
      },
    });

    if (response.status === 200) {
      const userData = response.data;
      console.log('User Info:', userData);
    } else {
      console.error('Error getting user info:', response.data);
    }
  } catch (error) {
    console.error('Error during user info retrieval:', error);
  }
}

getUserInfo();

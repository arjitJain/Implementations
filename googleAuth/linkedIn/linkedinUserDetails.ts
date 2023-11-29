import axios from 'axios';
import querystring from 'querystring'

export async function linkedinUserDetails(req: any, res: any) {
  const code = req.query.code;
  const REDIRECT_URI = 'http://localhost:2001/linkedinHome';
  const CLIENT_ID = '86ph4ln6nfbuuh';
  const CLIENT_SECRET = 'ETnAvNbfZFQV65CR';

  if (!code) {
    return res.status(400).send('Authorization code not found');
  }

  try {
    const tokenResponse = await axios.post(
      'https://www.linkedin.com/oauth/v2/accessToken',
      querystring.stringify({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: REDIRECT_URI,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    const accessToken = tokenResponse.data.access_token;
    console.log('accessToken  ',accessToken)
    const profileResponse = await axios.get(
      'https://api.linkedin.com/v2/userinfo',
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Connection': 'Keep-Alive',
        },
      }
    );
    const userProfile = profileResponse.data;
    console.log('LinkedIn User Profile:', userProfile);
    res.send("login successfully data fetched");
  } catch (error) {
    console.error('LinkedIn OAuth error:', error);
    res.status(500).send('LinkedIn OAuth error');
  }
}

import querystring from 'querystring';
import axios from 'axios';
export async function githubUserDetails(req:any,res:any){
  const code:any = req.query?.code;
  const userDetails = await getUserDetails(code);
  console.log(userDetails)
  res.send('success');
}
async function getUserDetails(code:any) {
  const githubToken = await axios.post(`https://github.com/login/oauth/access_token?client_id=10888cda3d47d6bebed2&client_secret=ac5230ea57fc726777bd33ac82a385528c1b3943&code=${code}`);
  const decoded = querystring.parse(githubToken.data);
      const accessToken = decoded.access_token;
      console.log(accessToken)
      const response = await axios.get('https://api.github.com/user', { headers: { Authorization: `Bearer ${accessToken}` } });
      return response.data;
}
//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
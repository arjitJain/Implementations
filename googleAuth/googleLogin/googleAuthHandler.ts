import {getGoogleOAuthTokens} from './googleAuthToken';
import { Request, Response } from "express";
import {getGoogleUser} from './getGoogleUser'
export async function googleOauthHandler(req: Request, res: Response) {
  // get the code from qs
  const code = req.query.code as string;
console.log(code,"================");
  try {
    // get the id and access token with the code
    const { id_token, access_token } = await getGoogleOAuthTokens({ code });
    console.log({ id_token, access_token });

    const googleUser = await getGoogleUser({ id_token, access_token });

    console.log({ googleUser });
    res.send('auth handler')
  }catch(error){
    console.log(error);
  }

}
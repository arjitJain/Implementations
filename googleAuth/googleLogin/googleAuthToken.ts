import axios from "axios";
import qs from "qs";
interface GoogleTokensResult {
  access_token: string;
  expires_in: Number;
  refresh_token: string;
  scope: string;
  id_token: string;
}
export async function getGoogleOAuthTokens({
  code,
}: {
  code: string;
}): Promise<GoogleTokensResult> {
  const url = "https://oauth2.googleapis.com/token";

  const values = {
    code,
    client_secret: "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",
    redirect_uri: "http://localhost:2001/home",
    client_id: "761634072915-6k9aahur5tghu77n39ptvhmmgfs6ipqt.apps.googleusercontent.com",
    grant_type: "authorization_code",
  };
console.log(qs.stringify(values),"quesry string")
  try {
    const res = await axios.post<GoogleTokensResult>(
      url,
      qs.stringify(values),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return res.data;
  } catch (error: any) {
    console.error(error.response.data.error);
    console.log(error, "Failed to fetch Google Oauth Tokens");
    throw new Error(error.message);
  }
}
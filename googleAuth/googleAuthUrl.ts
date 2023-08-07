
function getGoogleOAuthURL() {
  const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";

  const options = {
    redirect_uri: "http://localhost:2001",
    client_id: "761634072915-6k9aahur5tghu77n39ptvhmmgfs6ipqt.apps.googleusercontent.com",
    access_type: "offline",
    response_type: "code",
    prompt: "consent", //none,consent,login,select_account,'login consent'
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ].join(" "), // join scopes with space
  };

  const qs = new URLSearchParams(options);
  console.log(qs.toString(),'is hererere');
  console.log({options})

  return `${rootUrl}?${qs.toString()}`;
}

export default getGoogleOAuthURL;
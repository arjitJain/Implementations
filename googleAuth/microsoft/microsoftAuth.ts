export function microsoftAuth(){
  // Redirect the user to the Facebook login page
  return 'https://login.microsoftonline.com/consumers/oauth2/v2.0/authorize?client_id=31664942-46e4-440a-9ebf-eb30c5a27bd4&response_type=code&redirect_uri=http://localhost:2001/redirect/&response_mode=query&scope=User.Read&code_challenge=HY2HvaeCxwg2crqwTeaef6wmr7IsBUB4p4KATetrSug&code_challenge_method=S256&state=mauth'
}
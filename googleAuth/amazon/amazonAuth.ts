export function amazonAuth(){
  const appId = "696664209179808";
  const redirectUri = 'http://localhost:2001/facebookHome';
  // Redirect the user to the Facebook login page
  return 'https://www.amazon.com/ap/oa?client_id=amzn1.application-oa2-client.e84d09eebd9e47efa11902fcf49c5d44&scope=profile&response_type=code&state=208257577ll0975l93l2l59l895857093449424&redirect_uri=http://localhost:2001/amazonHome&code_challenge=Fw7s3XHRVb2m1nT7s646UrYiYLMJ54as0ZIU_injyqw&code_challenge_method=S256'
}
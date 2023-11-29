export function redditAuth() {
  // Redirect the user to the Facebook login page
  return `https://www.reddit.com/api/v1/authorize?client_id=bO0Cz8mlwN8P6OpRJU5fSw&response_type=code&state=random-string&redirect_uri=https://www.google.com&duration=permanent&scope=identity,submit,account`;
}

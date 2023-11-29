import express from "express";
import { googleOauthHandler } from "./googleLogin/googleAuthHandler";
import { githubUserDetails } from "./github/userDetails";
import { facebookAuth } from "./facebook/facebookAuth";
const app = express();
import getGoogleOAuthURL from "./googleLogin/googleAuthUrl";
import { githubAuth } from "./github/auth";
import { facebookUserDetails } from "./facebook/userDetails";
import { linkedinAuth } from "./linkedIn/linkedinAuth";
import { linkedinUserDetails } from "./linkedIn/linkedinUserDetails";
import { tiktokAuth } from "./tiktok/tiktokAuth";
import { twitterAuth } from "./twitter/twitterAuth";
import { twitterUserDetails } from "./twitter/userDetails";
import { yahooAuth } from "./yahoo/yahooAuth";
import { yahooUserDetails } from "./yahoo/userDetails";
import { redditAuth } from "./reddit/redditAuth";
import { amazonAuth } from "./amazon/amazonAuth";
import {amazonUserDetails} from './amazon/userDetails'
import { gitlabAuth } from "./gitlab/gitlabAuth";
import { gitlabUserDetails } from "./gitlab/userDetails";
import { discordAuth } from "./discord/discordAuth";
import { discordUserDetails } from "./discord/userDetails";
app.set("view engine", "ejs");
app.get("/", (req: any, res: any) => {
  res.render("index", {
    getGoogleOAuthURL,
    githubAuth,
    facebookAuth,
    linkedinAuth,
    tiktokAuth,
    twitterAuth,
    redditAuth,
    yahooAuth,
    amazonAuth,
    gitlabAuth,
    discordAuth
  });
});
app.get("/home", googleOauthHandler);

// login with github
app.get("/auth", githubAuth);
app.get("/gitHubPage", githubUserDetails);

//facebook login
app.get("/login/facebook", facebookAuth);
app.get("/facebookHome", facebookUserDetails);

//linkedin login
app.get("/login/linkedin", linkedinAuth);
app.get("/linkedinHome", linkedinUserDetails);

//twitter login
app.get("/login/twitter", twitterAuth);
app.get("/twitterHome", twitterUserDetails);

//yahoo login
app.get("/login/yahoo", yahooAuth);
app.get("/yahooHome", yahooUserDetails);

//amazon login
app.get("/login/amazon", amazonAuth);
app.get("/amazonHome", amazonUserDetails);

//discord login
app.get("/login/discord", discordAuth);
app.get("/discordHome", discordUserDetails);

//gitlab login
app.get("/login/gitlab", gitlabAuth);
app.get("/gitlabHome", gitlabUserDetails);


//reddit login
// app.get("/login/twitter", redditAuth);
// app.get("/twitterHome", redditUserDetails);

app.listen(2001, () => {
  console.log("heelo");
});

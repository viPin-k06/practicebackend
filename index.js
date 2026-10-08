require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

const githubData = {
  login: "viPin-k06",
  id: 192125201,
  node_id: "U_kgDOC3OZEQ",
  avatar_url: "https://avatars.githubusercontent.com/u/192125201?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/viPin-k06",
  html_url: "https://github.com/viPin-k06",
  followers_url: "https://api.github.com/users/viPin-k06/followers",
  following_url:
    "https://api.github.com/users/viPin-k06/following{/other_user}",
  gists_url: "https://api.github.com/users/viPin-k06/gists{/gist_id}",
  starred_url: "https://api.github.com/users/viPin-k06/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/viPin-k06/subscriptions",
  organizations_url: "https://api.github.com/users/viPin-k06/orgs",
  repos_url: "https://api.github.com/users/viPin-k06/repos",
  events_url: "https://api.github.com/users/viPin-k06/events{/privacy}",
  received_events_url: "https://api.github.com/users/viPin-k06/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Vipin Kumar",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 3,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2024-12-18T16:10:14Z",
  updated_at: "2026-10-06T19:18:36Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/login", (req, res) => {
  res.send("Login Page");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});

const omit = require("lodash.omit");
const pick = require("lodash.pick");
const map = require("lodash.map");
const partialRight = require("lodash.partialright");

const data = [
  {
    login: "vopani",
    id: 8954217,
    node_id: "MDQ6VXNlcjg5NTQyMTc=",
    avatar_url: "https://avatars1.githubusercontent.com/u/8954217?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/vopani",
    html_url: "https://github.com/vopani",
    followers_url: "https://api.github.com/users/vopani/followers",
    following_url: "https://api.github.com/users/vopani/following{/other_user}",
    gists_url: "https://api.github.com/users/vopani/gists{/gist_id}",
    starred_url: "https://api.github.com/users/vopani/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/vopani/subscriptions",
    organizations_url: "https://api.github.com/users/vopani/orgs",
    repos_url: "https://api.github.com/users/vopani/repos",
    events_url: "https://api.github.com/users/vopani/events{/privacy}",
    received_events_url: "https://api.github.com/users/vopani/received_events",
    type: "User",
    site_admin: false,
    score: 1
  },
  {
    login: "NirantK",
    id: 3250749,
    node_id: "MDQ6VXNlcjMyNTA3NDk=",
    avatar_url: "https://avatars1.githubusercontent.com/u/3250749?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/NirantK",
    html_url: "https://github.com/NirantK",
    followers_url: "https://api.github.com/users/NirantK/followers",
    following_url:
      "https://api.github.com/users/NirantK/following{/other_user}",
    gists_url: "https://api.github.com/users/NirantK/gists{/gist_id}",
    starred_url: "https://api.github.com/users/NirantK/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/NirantK/subscriptions",
    organizations_url: "https://api.github.com/users/NirantK/orgs",
    repos_url: "https://api.github.com/users/NirantK/repos",
    events_url: "https://api.github.com/users/NirantK/events{/privacy}",
    received_events_url: "https://api.github.com/users/NirantK/received_events",
    type: "User",
    site_admin: false,
    score: 1
  }
];

const allIndividual = [
  {
    login: "vopani",
    bio: "https://en.wikipedia.org/wiki/Rohan_Rao",
    email: null,
    name: "Rohan Rao"
  },
  {
    login: "NirantK",
    bio: "@bitspilanicode alum. Ex @soroco",
    email: null,
    name: "Nirant"
  }
];

var mapped = map(data, partialRight(pick, ["login", "id", "avatar_url"]));

console.log(mapped);

/* Output 

[ { login: 'vopani',
    id: 8954217,
    avatar_url: 'https://avatars1.githubusercontent.com/u/8954217?v=4' },
  { login: 'NirantK',
    id: 3250749,
    avatar_url: 'https://avatars1.githubusercontent.com/u/3250749?v=4' } ]

 */

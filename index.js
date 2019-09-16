require('dotenv').config()
const Octokit = require('@octokit/rest');
const octokit = new Octokit({auth: process.env.TOKEN});

// Compare: https://developer.github.com/v3/repos/#list-organization-repositories
octokit.issues.listForRepo({
  owner: 'papuaaaaaaa',
  repo: 'alc-tablet-typeA'
}).then(({ issues }) => {
  // handle data
  console.log(issues);
});
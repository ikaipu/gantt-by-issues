import dotenv from 'dotenv';
import Octokit from '@octokit/rest';

dotenv.config();
const octokit = new Octokit({ auth: process.env.TOKEN });

// Compare: https://developer.github.com/v3/repos/#list-organization-repositories
octokit.issues
  .listForRepo({
    owner: 'papuaaaaaaa',
    repo: 'alc-tablet-typeA',
  })
  .then(({ data }) => {
    // handle data
    console.log(data);
  })
  .catch(e => {
    console.error(e);
  });

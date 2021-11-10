[![NPM](https://badge.fury.io/js/git-variables.svg)](https://npm.im/git-variables)
[![CI](https://github.com/someimportantcompany/git-variables/workflows/Test/badge.svg?branch=master)](https://github.com/someimportantcompany/git-variables/actions?query=branch%3Amaster)
[![Coverage](https://coveralls.io/repos/github/someimportantcompany/git-variables/badge.svg)](https://coveralls.io/github/someimportantcompany/git-variables)

Static constants fetched from `git` for your Node processes.

```js
const { GIT_BRANCH, GIT_COMMIT } = require('git-variables');
```

Executes synchronously on startup to reduce impact & be ready to go immediately. Use in internal build tools or user-facing applications.

## Installation

```
$ npm install git-variables
```

- **Requires `git`** to be installed.
- Must be run within a repository - suitable for monorepos too.

## API

Variable | Command | Example
---- | ---- | ----
`GIT_DESCRIBE` | `git describe --always` | `1089e4f`
`GIT_DESCRIBE_LIGHT` | `git describe --always --tags` | `1089e4f`
`GIT_COMMIT` | `git rev-parse --short HEAD` | `1089e4f`
`GIT_SHA1` | `git rev-parse HEAD` | `1089e4fc62e43d7fc4a7323aaa3d09cd6cccc468`
`GIT_BRANCH` | `git rev-parse --abbrev-ref HEAD` | `master`
`GIT_MESSAGE` | `git log -1 --pretty=%B` | `Initial commit!\nThis project will change the world!`
`GIT_MESSAGE_SUBJECT` | `git log -1 --pretty=%s` | `Initial commit!`
`GIT_MESSAGE_BODY` | `git log -1 --pretty=%b` | `This project will change the world!`
`GIT_USER` | `git config user.name` | `jdrydn`
`GIT_EMAIL` | `git config user.email` | `jdrydn@github.io`
`GIT_IS_DIRTY` | `git diff --stat` | `false`
`GIT_REPOSITORY` | `git rev-parse --show-toplevel` | `git-variables`

### Examples

#### AWS-CDK

Reference git variables in your CDK stack definition:

```js
const lambdaNode = require('@aws-cdk/aws-lambda-nodejs');
const { GIT_SHA1 } = require('git-variables');

new lambdaNode.NodejsFunction(this, 'LambdaFunction', {
  entry: './script.js',
  handler: 'handler',
  runtime: lambdaNode.Runtime.NODEJS_12_X,
  memorySize: 1024,
  timeout: cdk.Duration.seconds(300),
  environment: {
    COMMIT_SHA1: GIT_SHA1,
    NODE_ENV: process.env.NODE_ENV || 'development',
  },
});
```

#### Serverless Framework

Reference git variables in your `serverless.yml` file:

```yml
service: example-service
provider: aws

functions:
  example-function:
    handler: script.handler
    environment:
      COMMIT_SHA1: ${file(./node_modules/git-variables):GIT_SHA1}
```

#### Your Application

Typically, variables from `git` would be part of a build process & passed to your application as build arguments or environment variables. But there's nothing stopping you directly using this in your application:

```js
// server.js
const express = require('express');
const { GIT_COMMIT } = require('git-variables');

const app = express();

app.get('/status', (req, res) => {
  res.status(200).send(GIT_COMMIT);
});

app.listen(3000);
```

When deploying, you must remember to **keep your `.git/` folder**:

```
$ cd /var/app
$ git clone github.com/jdrydn/example
$ cd example/ && npm ci
$ node ./server.js
```

## Notes

Any questions or suggestions please [open an issue](https://github.com/someimportantcompany/git-variables/issues).

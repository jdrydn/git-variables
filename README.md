[![NPM](https://badge.fury.io/js/git-variables.svg)](https://npm.im/git-variables)
[![CI](https://github.com/someimportantcompany/git-variables/workflows/Test/badge.svg?branch=master)](https://github.com/someimportantcompany/git-variables/actions?query=branch%3Amaster)
[![Coverage](https://coveralls.io/repos/github/someimportantcompany/git-variables/badge.svg)](https://coveralls.io/github/someimportantcompany/git-variables)

Static Git variables fetched from `git` when running Node processes. Use in your own application or in build-tools.

```js
const { GIT_BRANCH, GIT_COMMIT } = require('git-variables');
```

Executes synchronously on startup to reduce impact & be ready to go immediately.

## Installation

```
$ npm install git-variables
```

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

## Notes

Any questions or suggestions please [open an issue](/someimportantcompany/git-variables/issues).

const child = require('child_process');
const path = require('path');

function exec(cmd) {
  try {
    const result = child.execSync(cmd, { encoding: 'utf8', timeout: 1000 });
    return typeof result === 'string' && result.trim().length > 0 ? result.trim() : undefined;
  } catch (err) /* istanbul ignore next */ {
    return undefined;
  }
}

module.exports = {
  GIT_DESCRIBE: exec('git describe --always'),
  GIT_DESCRIBE_LIGHT: exec('git describe --always --tags'),

  GIT_COMMIT: exec('git rev-parse --short HEAD'),
  GIT_SHA1: exec('git rev-parse HEAD'),
  GIT_BRANCH: exec('git rev-parse --abbrev-ref HEAD'),

  GIT_MESSAGE: exec('git log -1 --pretty=%B'),
  GIT_MESSAGE_SUBJECT: exec('git log -1 --pretty=%s'),
  GIT_MESSAGE_BODY: exec('git log -1 --pretty=%b'),

  GIT_USER: exec('git config user.name'),
  GIT_EMAIL: exec('git config user.email'),

  GIT_IS_DIRTY: `${(exec('git diff --stat') || '').length > 0}`,
  GIT_REPOSITORY: path.basename(exec('git rev-parse --show-toplevel')),
};

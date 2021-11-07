const assert = require('assert');
const git = require('git-variables');

console.log(git); // eslint-disable-line no-console

describe('git-variables', () => {
  before(() => assert(Object.prototype.toString.call(git) === '[object Object]', 'Expected git to be a plain object'));

  it('should have a GIT_DESCRIBE variable', () => {
    const { GIT_DESCRIBE } = git;
    assert(typeof GIT_DESCRIBE === 'string', 'Expected GIT_DESCRIBE to be a string');
  });

  it('should have a GIT_DESCRIBE_LIGHT variable', () => {
    const { GIT_DESCRIBE_LIGHT } = git;
    assert(typeof GIT_DESCRIBE_LIGHT === 'string', 'Expected GIT_DESCRIBE_LIGHT to be a string');
  });

  it('should have a GIT_COMMIT variable', () => {
    const { GIT_COMMIT } = git;
    assert(typeof GIT_COMMIT === 'string', 'Expected GIT_COMMIT to be a string');
    assert(GIT_COMMIT.length === 7, 'Expected GIT_COMMIT length to be 7 characters');
  });

  it('should have a GIT_SHA1 variable', () => {
    const { GIT_SHA1 } = git;
    assert(typeof GIT_SHA1 === 'string', 'Expected GIT_SHA1 to be a string');
    assert(GIT_SHA1.length === 40, 'Expected GIT_SHA1 length to be 40 characters');
  });

  it('should have a GIT_BRANCH variable', () => {
    const { GIT_BRANCH } = git;
    assert(typeof GIT_BRANCH === 'string', 'Expected GIT_BRANCH to be a string');
  });

  it('should have a GIT_MESSAGE variable', () => {
    const { GIT_MESSAGE } = git;
    assert(typeof GIT_MESSAGE === 'string', 'Expected GIT_MESSAGE to be a string');
  });

  it('should have a GIT_MESSAGE_SUBJECT variable', () => {
    const { GIT_MESSAGE_SUBJECT } = git;
    assert(typeof GIT_MESSAGE_SUBJECT === 'string', 'Expected GIT_MESSAGE_SUBJECT to be a string');
  });

  it('should have a GIT_USER variable', () => {
    const { GIT_USER } = git;
    assert(typeof GIT_USER === 'string', 'Expected GIT_USER to be a string');
  });

  it('should have a GIT_EMAIL variable', () => {
    const { GIT_EMAIL } = git;
    assert(typeof GIT_EMAIL === 'string', 'Expected GIT_EMAIL to be a string');
  });

  it('should have a GIT_IS_DIRTY variable', () => {
    const { GIT_IS_DIRTY } = git;
    assert(typeof GIT_IS_DIRTY === 'string', 'Expected GIT_IS_DIRTY to be a string');
  });

  it('should have a GIT_REPOSITORY variable', () => {
    const { GIT_REPOSITORY } = git;
    assert(typeof GIT_REPOSITORY === 'string', 'Expected GIT_REPOSITORY to be a string');
  });
});

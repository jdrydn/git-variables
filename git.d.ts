declare const exp: {
  GIT_DESCRIBE?: string | undefined,
  GIT_DESCRIBE_LIGHT?: string | undefined,

  GIT_COMMIT?: string | undefined,
  GIT_SHA1?: string | undefined,
  GIT_BRANCH?: string | undefined,

  GIT_MESSAGE?: string | undefined,
  GIT_MESSAGE_SUBJECT?: string | undefined,
  GIT_MESSAGE_BODY?: string | undefined,

  GIT_USER?: string | undefined,
  GIT_EMAIL?: string | undefined,

  GIT_IS_DIRTY?: string | undefined,
  GIT_REPOSITORY?: string | undefined,
};

export default exp;

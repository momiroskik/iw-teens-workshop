const ERROR_CODE = Object.freeze({
  USER_EXIST: "This email address is already registered in our system!",
  WRONG_CREDENTIALS: "Sorry, your email or password is wrong",
  NO_REQ_BODY: "Invalid request body",
  NOT_AUTH: "UNAUTHORIZED, ACCESS HAS BEEN DENIED!",
  FORBIDDEN:
    "You are not allowed and doesn't have correct permision to do this action",
});

export default ERROR_CODE;

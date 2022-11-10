const API_MSG = {
  GET: 'Get data from API failed',
  POST: 'Post data to API failed',
  DELETE: 'Delete data failed',
  PATCH: 'Update data failed',
};

const ERROR_MSG = {
  // Email message
  EMAIL_NOT_EXIST: 'Email is not exists',
  EMAIL_INVALID: 'Invalid email',
  EMAIL_EMPTY: 'Email cannot be empty',

  // Password message
  PASSWORD_INCORRECT: 'Password incorrect',
  PASSWORD_INVALID: 'Invalid password',
  PASSWORD_EMPTY: 'Password cannot be empty',
  PASSWORD_LEAST: 'Password must be at least 8 characters',
};

const SUCCESS_MSG = {
  MSG_SUCCESS: 'Logged in successfully',
};

export { API_MSG, ERROR_MSG, SUCCESS_MSG };

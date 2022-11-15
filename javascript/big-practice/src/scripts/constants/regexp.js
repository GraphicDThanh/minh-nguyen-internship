const REGEXP = {
  REGEXP_MAIL: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
  REGEXP_PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{1,}$/g,
};

export default REGEXP;

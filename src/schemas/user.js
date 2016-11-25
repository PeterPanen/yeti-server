export default {
  email: {
    isEmail: {
      errorMessage: 'Invalid Email',
    },
  },
  password: {
    isLength: {
      options: [{ min: 6, max: 30 }],
    },
    errorMessage: 'Invalid password',
  },
  'name.first': {
    isLength: {
      options: [{ min: 2, max: 30 }],
    },
    errorMessage: 'Invalid First Name',
  },
  'name.last': {
    isLength: {
      options: [{ min: 2, max: 30 }],
    },
    errorMessage: 'Invalid Last Name',
  },
};

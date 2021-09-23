import * as yup from 'yup';
const RegisterValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, ({min}) => `En az ${min} karakter olmalıdır.`)
    .required('Name required'),
  surname: yup
    .string()
    .min(2, ({min}) => `En az ${min} karakter olmalıdır.`)
    .required('Surname required'),
  email: yup
    .string()
    .email('Please enter valid email.')
    .max(40, ({max}) => `En fazla ${max} karakter olmalıdır.`)
    .required('Email required'),
  password: yup
    .string()
    .min(6, ({min}) => `En az ${min} karakter olmalıdır.`)
    .max(25, ({max}) => `En fazla ${max} karakter olmalıdır.`)
    .required('Password required'),
});

export {RegisterValidationSchema};

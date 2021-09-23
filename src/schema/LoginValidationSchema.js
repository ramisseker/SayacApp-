import * as yup from 'yup';
const LoginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Lütfen geçerli bir e-posta girin.')
    .required('Email zorunlu'),
  password: yup
    .string()
    .min(6, ({min}) => `En az ${min} karakter olmalıdır.`)
    .max(25, ({max}) => `En fazla ${max} karakter olmalıdır.`)
    .required('Password required'),
    
});

export {LoginValidationSchema};

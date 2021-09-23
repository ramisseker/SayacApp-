import * as yup from 'yup';

const AddHouseValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, ({min}) => `En az ${min} karakter olmalıdır.`)
    .required('Email zorunlu'),
  tcno: yup
    .string()
    .min(11, ({min}) => `En az ${min} karakter olmalıdır.`)
    .required('Tc kimlik no zorunlu'),
  neighbourhood: yup
    .string()
    .min(3, ({min}) => `En az ${min} karakter olmalıdır.`)
    .required('Mahalle zorunlu'),
  street: yup
    .string()
    .min(3, ({min}) => `En az ${min} karakter olmalıdır.`)
    .required('Cadde zorunlu'),
  doornumber: yup
    .string()
    .min(3, ({min}) => `En az ${min} karakter olmalıdır.`)
    .required('Kapı no zorunlu'),
  counternumber: yup
    .string()
    .min(7, ({min}) => `En az ${min} karakter olmalıdır.`)
    .required('Sayaç no zorunlu'),
  initialcountervalue: yup
    .string()
    .min(3, ({min}) => `En az ${min} karakter olmalıdır.`)
    .required('İlk sayaç değeri zorunlu'),
  subscriberno: yup
    .string()
    .min(8, ({min}) => `En az ${min} karakter olmalıdır.`)
    .required('Abone no zorunlu'),
  notes: yup.string(),
});

export {AddHouseValidationSchema};

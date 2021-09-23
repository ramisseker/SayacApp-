import * as yup from 'yup';

const BillSettingsValidationSchema = yup.object().shape({
  birimfiyat: yup
    .string()
    .min(1, ({min}) => `En az ${min} karakter olmalıdır.`)
    .required('Birimfiyat zorunlu'),
  atiksubedeli: yup
    .string()
    .min(1, ({min}) => `En az ${min} karakter olmalıdır.`)
    .required('Atiksubedeli zorunlu'),
  ctvbedeli: yup
    .string()
    .min(1, ({min}) => `En az ${min} karakter olmalıdır.`)
    .required('Ctvbedeli zorunlu'),
  bakimbedeli: yup
    .string()
    .min(1, ({min}) => `En az ${min} karakter olmalıdır.`)
    .required('Bakimbedeli zorunlu'),
  kdvorani: yup
    .string()
    .min(1, ({min}) => `En az ${min} karakter olmalıdır.`)
    .required('Kdvorani zorunlu'),
  gecikmefaiziorani: yup
    .string()
    .min(1, ({min}) => `En az ${min} karakter olmalıdır.`)
    .required('Gecikmefaiziorani zorunlu'),
  faturaodemesuresi: yup
    .string()
    .min(1, ({min}) => `En az ${min} karakter olmalıdır.`)
    .required('Faturaodemesuresi zorunlu'),
  sayacdongugunu: yup
    .string()
    .min(1, ({min}) => `En az ${min} karakter olmalıdır.`)
    .required('Sayacdongugunu zorunlu'),
});

export {BillSettingsValidationSchema};

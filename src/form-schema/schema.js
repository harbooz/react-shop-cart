
import * as yup from 'yup';


export const schema = yup.object().shape({
    firstName: yup.string()
    .required('First Name is Required'),
    lastName: yup.string()
    .required('Last Name is Required'),
    message: yup.string()
  });
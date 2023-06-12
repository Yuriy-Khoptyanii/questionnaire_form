import './RegistrationForm.scss';
import 'react-phone-input-2/lib/style.css';

import axios from 'axios';
import { ErrorMessage, Field, FieldProps, Form, Formik, FormikValues } from 'formik';
import PhoneInput from 'react-phone-input-2';
import * as Yup from 'yup';

interface UserData {
  name: string;
  phone?: string;
  email: string;
}

const LoginSchema = Yup.object().shape({
  name: Yup.string().required('Enter name'),
  phone: Yup.string().test('phone', 'Enter a valid phone number', (value) => {
    if (!value) {
      return false;
    }
    const phoneNumberRegex = /^\d{12}$/;
    return phoneNumberRegex.test(value);
  }),
  email: Yup.string().email('Enter a valid email').required('Enter your email'),
});

function RegistrationForm() {
  const submitSignUp = async (
    values: UserData,
    { resetForm }: { resetForm: () => void },
  ) => {
    await axios.post('https://formspree.io/f/mdovqnpy', values);
    resetForm();
  };

  return (
    <div className="pageForm">
      <div className="pageForm__title">
        Запишитесь <span style={{ color: '#FF3459' }}>бесплатно</span>
        <br />и получите подарок
      </div>
      <Formik
        initialValues={{ name: '', phone: '', email: '' }}
        validationSchema={LoginSchema}
        onSubmit={submitSignUp}
      >
        <Form className="form">
          <div className="form__input">
            <Field
              className="form__input__field"
              placeholder="Ваше имя и фамилия"
              type="text"
              id="name"
              name="name"
            />
            <ErrorMessage name="name" component="div" className="form__input__error" />
          </div>
          <div className="form__input">
            <Field type="text" id="phone" name="phone">
              {({ field, form }: FieldProps<string, FormikValues>) => (
                <PhoneInput
                  containerClass="form__input__field"
                  inputStyle={{
                    background: 'transparent',
                    height: '100%',
                    color: '#FFFFFF',
                    border: 'none',
                  }}
                  buttonClass="test"
                  buttonStyle={{
                    background: 'transparent',
                    border: 'none',
                    color: 'black',
                  }}
                  placeholder="Ваш номер телефона"
                  country="ua"
                  value={field.value}
                  onChange={(value) => form.setFieldValue('phone', value)}
                />
              )}
            </Field>
            <ErrorMessage name="phone" component="div" className="form__input__error" />
          </div>
          <div className="form__input">
            <Field
              className="form__input__field"
              placeholder="Ваш email"
              type="text"
              id="email"
              name="email"
            />
            <ErrorMessage name="email" component="div" className="form__input__error" />
          </div>
          <button className="form__btn" type="submit">
            Записаться бесплатно
          </button>
        </Form>
      </Formik>
      <p className="pageForm__argeeMessage">
        Нажимая на кнопку я согашаюсь
        <br />
        <span style={{ textDecoration: 'underline' }}>c политикой конфидециальности</span>
      </p>
    </div>
  );
}

export default RegistrationForm;

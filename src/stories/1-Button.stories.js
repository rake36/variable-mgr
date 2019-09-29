import React from 'react';
import { Formik } from 'formik';
import { Form, Col } from 'react-bootstrap';
import { load, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import TextField from '../components/TextField';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Yup from 'yup';

const VariableSchema = Yup.object().shape({
  id: Yup.string(),
  name: Yup.string()
    .min(2, 'Too short')
    .max(255, 'Too long')
    .required('Required'),
});

addDecorator(storyFn => (
  <div className="container">
    <div>
      <h1>Variable</h1>
      <Formik
        initialValues={{ id: '', name: '' }}
        validationSchema={VariableSchema}
        onSubmit={console.log}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Row>{storyFn()}</Form.Row>
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </div>
  </div>
));

export default {
  title: 'Form Elements',
};

// export const text = () => (
//   // <Button onClick={action('clicked')}>Hello Button</Button>
// );

export const TextFieldStory = () => (
  // <Button onClick={action('clicked')}>
  //   <span role="img" aria-label="so cool">
  //     😀 😎 👍 💯
  //   </span>
  // </Button>
  <TextField controlId="mycontrolid" md="4" />
);

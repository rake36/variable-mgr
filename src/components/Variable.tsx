import React from 'react';
import { Formik } from 'formik';
import { Form, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import * as Yup from 'yup';

const VariableSchema = Yup.object().shape({
  id: Yup.string(),
  name: Yup.string()
    .min(2, 'Too short')
    .max(255, 'Too long')
    .required('Required'),
});

const Variable = () => (
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
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="formVariableName">
              <Form.Label>Variable Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={values.name}
                placeholder="Variable Name"
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.name && !!errors.name}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Variable;

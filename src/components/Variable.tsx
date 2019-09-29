import React from 'react';
import { Formik } from 'formik';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import * as Yup from 'yup';
import TextField from './TextField';

const VariableSchema = Yup.object().shape({
  id: Yup.string(),
  name: Yup.string()
    .min(2, 'Too short')
    .max(255, 'Too long')
    .required('Required'),
  datatype: Yup.string(),
});

const Variable = () => (
  <div>
    <h1>Variable</h1>
    <Formik
      initialValues={{ id: '', name: '', datatype: '' }}
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
            <TextField
              controlId="ctrlVariableId"
              md="4"
              label="Id"
              placeholder="Enter Variable Id"
              fid="id"
              values={values}
              touched={touched}
              errors={errors}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <TextField
              controlId="ctrlVariableName"
              md="4"
              label="Name"
              placeholder="Enter Variable Name"
              fid="name"
              values={values}
              touched={touched}
              errors={errors}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <TextField
              controlId="ctrlVariableType"
              md="4"
              label="Type"
              placeholder="Enter Variable Type"
              fid="datatype"
              values={values}
              touched={touched}
              errors={errors}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
          </Form.Row>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Variable;

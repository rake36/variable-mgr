import React from 'react';
import { Formik } from 'formik';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import * as Yup from 'yup';
import TextField from '../Form/TextField';
import SelectField from '../Form/SelectField';

const VariableSchema = Yup.object().shape({
  VariableId: Yup.number()
    .typeError('Must be an integer')
    .min(1, 'Min 1')
    .max(999999, 'Max 999999')
    .required('Required'),
  VariableName: Yup.string()
    .min(2, 'At least two chars')
    .max(255, '255 chars max')
    .required('Required'),
  VariableType: Yup.number()
    .notOneOf([0], 'Pick a valid Type')
    .required('Required'),
});

const Variable = () => (
  <div>
    <h1>Variable</h1>
    <Formik
      initialValues={{ VariableId: '', VariableName: '', VariableType: '' }}
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
              md="2"
              label="Id"
              placeholder="Id"
              fid="VariableId"
              maxLength={6}
              values={values}
              touched={touched}
              errors={errors}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <TextField
              md="7"
              label="Name"
              placeholder="Variable Name"
              fid="VariableName"
              maxLength={255}
              values={values}
              touched={touched}
              errors={errors}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <SelectField
              md="3"
              label="Type"
              placeholder="Type"
              fid="VariableType"
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

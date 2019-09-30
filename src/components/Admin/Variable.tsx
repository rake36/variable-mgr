import React from 'react';
import { Formik } from 'formik';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import * as Yup from 'yup';
import TextField from '../Form/TextField';
import SelectField from '../Form/SelectField';
import DateField from '../Form/DateField';

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
  VariableDate: Yup.date()
    .typeError('Must be a Date')
    .required('Required'),
});

const Variable = () => (
  <div>
    <h1>Variable</h1>
    <Formik
      initialValues={{
        VariableId: '',
        VariableName: '',
        VariableType: '',
        VariableDate: '',
      }}
      validationSchema={VariableSchema}
      onSubmit={console.log}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        errors,
        setFieldValue,
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
              fid="VariableType"
              items={[
                { text: '-- Select --', value: 0 },
                { text: 'String', value: 1 },
                { text: 'Integer', value: 2 },
                { text: 'Float', value: 3 },
                { text: 'Date/Time', value: 4 },
              ]}
              values={values}
              touched={touched}
              errors={errors}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
          </Form.Row>
          <Form.Row>
            <DateField
              md="4"
              label="Date"
              placeholder="Date"
              fid="VariableDate"
              values={values}
              touched={touched}
              errors={errors}
              setFieldValue={setFieldValue}
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

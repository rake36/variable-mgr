import React from 'react';
import {
  Formik,
  FormikActions,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';
import { Form as FormBS } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import * as Yup from 'yup';

// Why not use Yup? Seems to work pretty well and integrated with Formik
const VariableSchema = Yup.object().shape({
  id: Yup.string(),
  name: Yup.string()
    .min(2, 'Too short')
    .max(255, 'Too long')
    .required('Required'),
});

interface VariableValues {
  id: string;
  name: string;
}

const Variable = () => (
  <div>
    <h1>Variable</h1>
    <Formik
      initialValues={{ id: '', name: '' }}
      validationSchema={VariableSchema}
      onSubmit={(
        values: VariableValues,
        actions: FormikActions<VariableValues>
      ) => {
        console.log({ values, actions });
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
      render={(formikBag: FormikProps<VariableValues>) => (
        <FormBS>
          <Field
            name="name"
            render={({ field, form }: FieldProps<VariableValues>) => (
              <FormBS.Group controlId="formVariableName">
                <FormBS.Label>Variable Name</FormBS.Label>
                <FormBS.Control
                  type="text"
                  {...field}
                  placeholder="Variable Name"
                  isInvalid={form.touched.name && !!form.errors.name}
                ></FormBS.Control>
                <FormBS.Control.Feedback type="invalid">
                  {form.errors.name}
                </FormBS.Control.Feedback>
              </FormBS.Group>
            )}
          />
        </FormBS>
      )}
    ></Formik>
  </div>
);

export default Variable;

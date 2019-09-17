import React from 'react';
import {
  Formik,
  FormikActions,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';
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
        <Form>
          <label htmlFor="name">Variable Name</label>
          <Field
            name="name"
            render={({ field, form }: FieldProps<VariableValues>) => (
              <div>
                <div>
                  <input type="text" {...field} placeholder="Variable Name" />
                  {form.touched.name && form.errors.name && form.errors.name}
                </div>
                <div>{form.submitCount}</div>
              </div>
            )}
          />
        </Form>
      )}
    ></Formik>
  </div>
);

export default Variable;

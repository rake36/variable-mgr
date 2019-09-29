import React from 'react';
import { Form, Col } from 'react-bootstrap';
import { FormikErrors, FormikValues, FormikTouched } from 'formik';

interface TextFieldProps {
  md: string;
  label: string;
  placeholder: string;
  fid: string;
  maxLength: number;
  values: FormikValues;
  touched: FormikTouched<FormikValues>;
  errors: FormikErrors<FormikValues>;
  handleChange: React.FormEventHandler<any>;
  handleBlur: React.FormEventHandler<any>;
}

function TextField(props: TextFieldProps) {
  const {
    md,
    label,
    fid,
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    ...passProps
  } = props; // lookup into FormikValues dictionary
  return (
    <Form.Group as={Col} md={md} controlId={'ctrl' + fid}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type="text"
        name={fid}
        value={values[fid]}
        onChange={handleChange}
        onBlur={handleBlur}
        isInvalid={touched[fid] && !!errors[fid]}
        {...passProps}
      ></Form.Control>
      <Form.Control.Feedback type="invalid">
        {errors[fid]}
      </Form.Control.Feedback>
    </Form.Group>
  );
}

export default TextField;

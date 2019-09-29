import React from 'react';
import { Form, Col } from 'react-bootstrap';
import { FormikErrors, FormikValues, FormikTouched } from 'formik';

interface SelectFieldProps {
  md: string;
  label: string;
  fid: string;
  values: FormikValues;
  touched: FormikTouched<FormikValues>;
  errors: FormikErrors<FormikValues>;
  handleChange: React.FormEventHandler<any>;
  handleBlur: React.FormEventHandler<any>;
}

function SelectField(props: SelectFieldProps) {
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
    <Form.Group as={Col} md={md} controlId={fid}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        as="select"
        name={fid}
        value={values[fid]}
        onChange={handleChange}
        onBlur={handleBlur}
        isInvalid={touched[fid] && !!errors[fid]}
        {...passProps}
      >
        <option value="0">-- Select --</option>
        <option value="1">String</option>
        <option value="2">Integer</option>
        <option value="3">Float</option>
        <option value="4">Date/Time</option>
      </Form.Control>
      <Form.Control.Feedback type="invalid">
        {errors[fid]}
      </Form.Control.Feedback>
    </Form.Group>
  );
}

export default SelectField;

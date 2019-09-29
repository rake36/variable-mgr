import React from 'react';
import { Form, Col } from 'react-bootstrap';
import { FormikErrors, FormikValues, FormikTouched } from 'formik';

interface SelectFieldProps {
  md: string;
  label: string;
  placeholder: string;
  fid: string;
  values: FormikValues;
  touched: FormikTouched<FormikValues>;
  errors: FormikErrors<FormikValues>;
  handleChange: React.FormEventHandler<any>;
  handleBlur: React.FormEventHandler<any>;
}

function SelectField(props: SelectFieldProps) {
  const fid = props.fid; // lookup into FormikValues dictionary
  return (
    <Form.Group as={Col} md={props.md} controlId={props.fid}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        as="select"
        name={fid}
        value={props.values[fid]}
        placeholder={props.placeholder}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        isInvalid={props.touched[fid] && !!props.errors[fid]}
      >
        <option value="0">-- Select --</option>
        <option value="1">String</option>
        <option value="2">Integer</option>
        <option value="3">Float</option>
        <option value="4">Date/Time</option>
      </Form.Control>
      <Form.Control.Feedback type="invalid">
        {props.errors[fid]}
      </Form.Control.Feedback>
    </Form.Group>
  );
}

export default SelectField;

import React from 'react';
import { Form, Col } from 'react-bootstrap';
import { FormikErrors, FormikValues, FormikTouched } from 'formik';

interface TextFieldProps {
  controlId: string;
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

function TextField(props: TextFieldProps) {
  const fid = props.fid; // lookup into FormikValues dictionary
  return (
    <Form.Group as={Col} md={props.md} controlId={props.controlId}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        type="text"
        name={fid}
        value={props.values[fid]}
        placeholder={props.placeholder}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        isInvalid={props.touched[fid] && !!props.errors[fid]}
      ></Form.Control>
      <Form.Control.Feedback type="invalid">
        {props.errors[fid]}
      </Form.Control.Feedback>
    </Form.Group>
  );
}

export default TextField;

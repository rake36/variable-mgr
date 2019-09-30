import React from 'react';
import { Form, Col } from 'react-bootstrap';
import { FormikErrors, FormikValues, FormikTouched } from 'formik';

interface SelectItem {
  text: string;
  value: number;
}

interface SelectFieldProps {
  md: string;
  label: string;
  fid: string;
  items: Array<SelectItem>;
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
    items,
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    ...passProps
  } = props; // lookup into FormikValues dictionary

  const options = items.map(data => (
    <option key={data.value} value={data.value}>
      {data.text}
    </option>
  ));

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
        {options}
      </Form.Control>
      <Form.Control.Feedback type="invalid">
        {errors[fid]}
      </Form.Control.Feedback>
    </Form.Group>
  );
}

export default SelectField;

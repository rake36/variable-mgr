import React, { SyntheticEvent } from 'react';
import { Form, Col } from 'react-bootstrap';
import { FormikErrors, FormikValues, FormikTouched } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DateField.css';

interface DateFieldProps {
  md: string;
  label: string;
  placeholder: string;
  fid: string;
  // maxLength: number;
  values: FormikValues;
  touched: FormikTouched<FormikValues>;
  errors: FormikErrors<FormikValues>;
  // handleChange: React.FormEventHandler<any>;
  handleBlur: React.FormEventHandler<any>;
  setFieldValue: any;
}

function DateField(props: DateFieldProps) {
  const {
    md,
    label,
    fid,
    values,
    touched,
    errors,
    setFieldValue,
    handleBlur,
    ...passProps
  } = props; // lookup into FormikValues dictionary

  return (
    <Form.Group as={Col} md={md} controlId={fid}>
      <Form.Label>{label}</Form.Label>
      <DatePicker
        id={fid}
        name={fid}
        className={
          touched[fid] && errors[fid]
            ? 'form-control is-invalid'
            : 'form-control'
        }
        selected={values[fid]}
        onChange={val => {
          setFieldValue(fid, val);
        }}
        onBlur={handleBlur}
      />
      {touched[fid] && errors[fid] && (
        <div className="text-danger">{errors[fid]}</div>
      )}
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </Form.Group>
  );
}

export default DateField;

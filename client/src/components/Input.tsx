import { useField } from 'formik';
import React from 'react';
import { FormControl, FormLabel } from 'react-bootstrap';

interface InputProps {
  label?: string;
  name: string;
}
export default function Input(props: InputProps) {
  const { label, name } = props;
  const [field] = useField(name);

  return (
    <>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <FormControl {...field} type="text" id={name} />
    </>
  );
}

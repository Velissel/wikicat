import { Formik, Form, useFormikContext } from 'formik';
import React, { useCallback, useEffect } from 'react';
import Input from './Input';
import { Button, FormGroup, FormLabel, InputGroup } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';

const INIT_FORM_VALUES = { searchTerm: '' };
type CatSearchInputValues = typeof INIT_FORM_VALUES;

function CatSearchTermInput() {
  const fieldName = 'searchTerm';
  const formik = useFormikContext();
  const [query] = useSearchParams();
  const q = query.get('q');

  useEffect(() => {
    if (q !== null) {
      formik.setFieldValue(fieldName, q);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q]);

  return (
    <FormGroup className="mb-3">
      <FormLabel htmlFor={fieldName}>Search cat by breed</FormLabel>
      <InputGroup>
        <Input name={fieldName} />
        <Button type="submit">Search</Button>
      </InputGroup>
    </FormGroup>
  );
}

export default function CatSearchInput() {
  const navigate = useNavigate();
  const onSubmit = useCallback((values: CatSearchInputValues) => {
    navigate(`/search-results?q=${encodeURIComponent(values.searchTerm)}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Formik initialValues={INIT_FORM_VALUES} onSubmit={onSubmit}>
      <Form>
        <CatSearchTermInput />
      </Form>
    </Formik>
  );
}

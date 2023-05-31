import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from './Input';
import { Formik } from 'formik';
import { Form } from 'react-bootstrap';

describe('Input component', () => {
  it('should render', () => {
    const INIT = { input: '' };
    const { container } = render(
      <Formik initialValues={INIT} onSubmit={jest.fn()}>
        <Form>
          <Input name="input" label="input" />
        </Form>
      </Formik>,
    );
    expect(screen.getByRole('textbox', { name: 'input' })).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});

/* tslint:disable */
import { Button, Form, Input } from 'antd';
import * as React from 'react';
// tslint:disable-next-line: ordered-imports
import { useMutation } from 'react-apollo';
import { Formik } from 'formik';

import { CreateUserDocument } from '../../generated/apolloComponents';

interface MyFormValues {
  username: String;
  email: String;
  password: String;
}

const RegisterUserForm = () => {
  const [createUser] = useMutation(CreateUserDocument);

  const initialValues: MyFormValues = { username: '', email: '', password: '' };

  return (
    // tslint:disable-next-line: no-empty

    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        try {
          createUser({
            variables: {
              username: values.username,
              email: values.email,
              password: values.password
            }
          })
            .then((data) => console.log(data, 'data'))
            .catch((err) => console.log(err, 'err'));
        } catch (error) {
          console.log('error', error);
        }
      }}
      render={(formikbag) => {
        return (
          <form>
            <Form.Item>
              <Input
                name="username"
                placeholder="Username"
                onChange={(e) => {
                  formikbag.setFieldValue('username', e.target.value);
                }}
              />
            </Form.Item>
            <Form.Item>
              <Input
                name="email"
                placeholder="Email"
                onChange={(e) => {
                  formikbag.setFieldValue('email', e.target.value);
                }}
              />
            </Form.Item>
            <Form.Item>
              <Input
                name="password"
                placeholder="Password"
                onChange={(e) => {
                  formikbag.setFieldValue('password', e.target.value);
                }}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="button"
                onClick={() => formikbag.submitForm()}
              >
                Register
              </Button>
            </Form.Item>
          </form>
        );
      }}
    />
  );
};

export default RegisterUserForm;

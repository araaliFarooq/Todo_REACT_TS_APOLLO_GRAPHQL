/* tslint:disable */
import { Button, Form, Input } from 'antd';
import * as React from 'react';
// tslint:disable-next-line: ordered-imports
import { useMutation } from 'react-apollo';
// import { tokenAuthMutation } from 'src/graphql/todo/mutations/createTodo';
import { TokenAuthDocument } from 'src/generated/apolloComponents';
// import flowright from 'lodash.flowright';

import { Formik } from 'formik';

interface MyFormValues {
  username: String;
  password: String;
}
const Login = () => {
  const [tokenAuth] = useMutation(TokenAuthDocument);
  const [tokenData, setTokenData] = React.useState();
  const initialValues: MyFormValues = {
    username: '',
    password: ''
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        try {
          tokenAuth({
            variables: {
              username: values.username,
              password: values.password
            }
          }).then((res) => {
            console.log(res, 'data===>');
            if (res) {
              setTokenData(res as any);

              localStorage.setItem('token', res.data.tokenAuth.token);
              console.log(tokenData, 'the data2');
            }

            //   const { token } = tokenAuth;
            //   console.log(data, 'token===');
            console.log(localStorage.getItem('token'), 'localst');
          });
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
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </form>
        );
      }}
    />
  );
};

export default Login;

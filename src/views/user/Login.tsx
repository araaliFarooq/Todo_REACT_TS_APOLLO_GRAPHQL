/* tslint:disable */
import { Button, Form, Input } from 'antd';
import * as React from 'react';
// tslint:disable-next-line: ordered-imports
import { useMutation } from 'react-apollo';
// import { tokenAuthMutation } from 'src/graphql/todo/mutations/createTodo';
import { TokenAuthDocument } from 'src/generated/apolloComponents';
// import flowright from 'lodash.flowright';

const Login = () => {
  const [tokenAuth] = useMutation(TokenAuthDocument);
  const [tokenData, setTokenData] = React.useState();

  return (
    // tslint:disable-next-line: no-empty

    <form
      // tslint:disable-next-line: jsx-no-lambda
      onSubmit={async (e) => {
        e.preventDefault();
        try {
          //   await createTodo({ variables: { title: 'hello' } });
          tokenAuth({
            variables: { username: 'AraaliFarooq', password: 'araali' }
          })
            .then((res) => {
              console.log(res, 'data===>');
              if (res) {
                setTokenData(res as any);

                localStorage.setItem('token', res.data.tokenAuth.token);
                console.log(tokenData, 'the data2');
              }

              //   const { token } = tokenAuth;
              //   console.log(data, 'token===');
              console.log(localStorage.getItem('token'), 'localst');
            })
            .catch((err) => console.log(err, 'err'));
        } catch (error) {
          console.log(error, '>>>>>>>>>>>>>error');
        }
      }}
    >
      <Form.Item>
        <Input placeholder="username" value={''} onChange={() => {}} />
      </Form.Item>

      <Form.Item>
        <Input placeholder="password" value={''} onChange={() => {}} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </form>
  );
};

export default Login;

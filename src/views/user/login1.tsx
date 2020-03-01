/* tslint:disable */
import { Button, Form, Input } from 'antd';
import * as React from 'react';
// tslint:disable-next-line: ordered-imports
import { useMutation } from 'react-apollo';
// import flowright from 'lodash.flowright';
import {
  //   CreateTodoMutation,
  CreateTodoDocument
} from '../../generated/apolloComponents';

const Login = () => {
  const [createTodo, { data }] = useMutation(CreateTodoDocument);

  console.log(data, '-------->');

  return (
    // tslint:disable-next-line: no-empty

    <form
      // tslint:disable-next-line: jsx-no-lambda
      onSubmit={async (e) => {
        e.preventDefault();
        try {
          //   await createTodo({ variables: { title: 'hello' } });
          createTodo({ variables: { title: 'hello' } })
            .then((data) => console.log(data, 'data'))
            .catch((err) => console.log(err, 'err'));
        } catch (error) {
          console.log(error, '>>>>>>>>>>>>>error');
        }
      }}
    >
      <Form.Item>
        <Input placeholder="Title" value={''} onChange={() => {}} />
      </Form.Item>
      <Form.Item>
        <Input.TextArea placeholder="Body" value={''} onChange={() => {}} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
    </form>
  );
};

export default Login;

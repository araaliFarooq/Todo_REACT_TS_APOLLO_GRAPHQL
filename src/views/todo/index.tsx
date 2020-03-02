/* tslint:disable */
import { Button, Form, Input } from 'antd';
import * as React from 'react';
// tslint:disable-next-line: ordered-imports
import { useMutation } from 'react-apollo';
import { Formik } from 'formik';

import { CreateTodoDocument } from '../../generated/apolloComponents';
import { fetchTodoQuery } from 'src/graphql/todo/queries/fetchTodo';

interface MyFormValues {
  title: string;
}

const CreateTodoForm = () => {
  const [createTodo] = useMutation(CreateTodoDocument);

  const initialValues: MyFormValues = { title: '' };

  return (
    // tslint:disable-next-line: no-empty

    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        try {
          createTodo({
            variables: { title: values.title },
            refetchQueries: [
              {
                query: fetchTodoQuery
              }
            ]
          })
            .then((data) => console.log(data, 'data'))
            .catch((err) => console.log(err, 'err'));
        } catch (error) {
          console.log('error', error);
        }
      }}
      render={(formikbag) => {
        console.log(formikbag.values, '====');
        return (
          <form>
            <Form.Item>
              <Input
                name="title"
                placeholder="Todo"
                onChange={(e) => {
                  formikbag.setFieldValue('title', e.target.value);
                }}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="button"
                onClick={() => formikbag.submitForm()}
              >
                Create
              </Button>
            </Form.Item>
          </form>
        );
      }}
    />
  );
};

export default CreateTodoForm;

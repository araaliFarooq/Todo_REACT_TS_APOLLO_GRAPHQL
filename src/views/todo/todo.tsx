import { Card, Col, Divider, Row, Spin } from 'antd';
// import * as queryString from 'query-string';
import * as React from 'react';
// import { RouteComponentProps, withRouter } from 'react-router';
// import { NoteDeleteMutation, NotesQuery } from '../../generatedModels';

import { useQuery } from 'react-apollo';
import { fetchTodoQuery } from 'src/graphql/todo/queries/fetchTodo';
import CreateNoteForm from '.';

const Todo = () => {
  //   const [createTodo, { data }] = useMutation(CreateTodoDocument);

  const { data, loading, error } = useQuery(fetchTodoQuery);

  if (loading) {
    return <Spin style={{ marginTop: 16, display: 'block' }} />;
  }

  if (error) {
    return <p>ERROR</p>;
  }
  if (!data) {
    return <p>Not found</p>;
  }

  console.log(data.todoList, 'data----->todo');

  return (
    <div>
      <Row>
        <Col span={12} offset={6}>
          <Divider>Create Todo Note</Divider>
          <CreateNoteForm />
          <Divider>Todos</Divider>
          {loading ? (
            <Spin style={{ marginTop: 16, display: 'block' }} />
          ) : (
            <div>
              {data.todoList.map((todo: any) => (
                <Card key={todo.id} style={{ marginTop: 16 }} actions={[]}>
                  <Card.Meta title={todo.title} description={todo.complete} />
                </Card>
              ))}
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Todo;

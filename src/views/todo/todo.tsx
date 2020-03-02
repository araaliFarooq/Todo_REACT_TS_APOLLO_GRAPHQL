import { Card, Col, Divider, Row, Spin } from 'antd';
import * as React from 'react';
import { useQuery } from 'react-apollo';
import { fetchTodoQuery } from 'src/graphql/todo/queries/fetchTodo';
import CreateTodoForm from '.';

const Todo = () => {
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
          <CreateTodoForm />
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

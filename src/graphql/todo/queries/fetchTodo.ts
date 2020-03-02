import gql from 'graphql-tag';

export const fetchTodoQuery = gql`
  query fetchTodo {
    todoList {
      id
      title
      complete
    }
  }
`;

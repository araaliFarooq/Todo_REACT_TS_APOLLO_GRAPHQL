import gql from 'graphql-tag';

export const createTodoMutation = gql`
  mutation createTodo($title: String!) {
    createTodo(title: $title) {
      todo {
        id
        title
        user {
          username
        }
        complete
      }
    }
  }
`;

export const tokenAuthMutation = gql`
  mutation tokenAuth($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`;

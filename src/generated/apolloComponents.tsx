/* tslint:disable */
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  GenericScalar: any;
};

export type CreateTodo = {
  __typename?: 'CreateTodo';
  ok?: Maybe<Scalars['Boolean']>;
  todo?: Maybe<TodoListType>;
};

export type CreateUser = {
  __typename?: 'CreateUser';
  ok?: Maybe<Scalars['Boolean']>;
  user?: Maybe<UserType>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser?: Maybe<CreateUser>;
  createTodo?: Maybe<CreateTodo>;
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  verifyToken?: Maybe<Verify>;
  refreshToken?: Maybe<Refresh>;
};

export type MutationCreateUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type MutationCreateTodoArgs = {
  title: Scalars['String'];
};

export type MutationTokenAuthArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type MutationVerifyTokenArgs = {
  token: Scalars['String'];
};

export type MutationRefreshTokenArgs = {
  token: Scalars['String'];
};

export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  token?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  user?: Maybe<UserType>;
  todoList?: Maybe<Array<Maybe<TodoListType>>>;
  todoItem?: Maybe<TodoItemType>;
};

export type QueryUserArgs = {
  id?: Maybe<Scalars['Int']>;
};

export type QueryTodoListArgs = {
  id?: Maybe<Scalars['Int']>;
};

export type Refresh = {
  __typename?: 'Refresh';
  token?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['GenericScalar']>;
};

export type TodoItemType = {
  __typename?: 'TodoItemType';
  id: Scalars['ID'];
  itemName: Scalars['String'];
  todoList: TodoListType;
  complete: Scalars['Boolean'];
};

export type TodoListType = {
  __typename?: 'TodoListType';
  id: Scalars['ID'];
  title: Scalars['String'];
  complete: Scalars['Boolean'];
  user: UserType;
  todoitemSet: Array<TodoItemType>;
};

export type UserType = {
  __typename?: 'UserType';
  id: Scalars['ID'];
  password: Scalars['String'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  isSuperuser: Scalars['Boolean'];
  username: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  isStaff: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
  dateJoined: Scalars['DateTime'];
  todolistSet: Array<TodoListType>;
};

export type Verify = {
  __typename?: 'Verify';
  payload?: Maybe<Scalars['GenericScalar']>;
};

export type CreateTodoMutationVariables = {
  title: Scalars['String'];
};

export type CreateTodoMutation = { __typename?: 'Mutation' } & {
  createTodo: Maybe<
    { __typename?: 'CreateTodo' } & {
      todo: Maybe<
        { __typename?: 'TodoListType' } & Pick<
          TodoListType,
          'id' | 'title' | 'complete'
        > & { user: { __typename?: 'UserType' } & Pick<UserType, 'username'> }
      >;
    }
  >;
};

export type TokenAuthMutationVariables = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type TokenAuthMutation = { __typename?: 'Mutation' } & {
  tokenAuth: Maybe<
    { __typename?: 'ObtainJSONWebToken' } & Pick<ObtainJsonWebToken, 'token'>
  >;
};

export type FetchTodoQueryVariables = {};

export type FetchTodoQuery = { __typename?: 'Query' } & {
  todoList: Maybe<
    Array<
      Maybe<
        { __typename?: 'TodoListType' } & Pick<
          TodoListType,
          'id' | 'title' | 'complete'
        >
      >
    >
  >;
};

export type CreateUserMutationVariables = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type CreateUserMutation = { __typename?: 'Mutation' } & {
  createUser: Maybe<
    { __typename?: 'CreateUser' } & {
      user: Maybe<
        { __typename?: 'UserType' } & Pick<UserType, 'id' | 'username'>
      >;
    }
  >;
};

export const CreateTodoDocument = gql`
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
export type CreateTodoMutationFn = ApolloReactCommon.MutationFunction<
  CreateTodoMutation,
  CreateTodoMutationVariables
>;
export type CreateTodoComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    CreateTodoMutation,
    CreateTodoMutationVariables
  >,
  'mutation'
>;

export const CreateTodoComponent = (props: CreateTodoComponentProps) => (
  <ApolloReactComponents.Mutation<
    CreateTodoMutation,
    CreateTodoMutationVariables
  >
    mutation={CreateTodoDocument}
    {...props}
  />
);

export type CreateTodoProps<TChildProps = {}> = ApolloReactHoc.MutateProps<
  CreateTodoMutation,
  CreateTodoMutationVariables
> &
  TChildProps;
export function withCreateTodo<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    CreateTodoMutation,
    CreateTodoMutationVariables,
    CreateTodoProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    CreateTodoMutation,
    CreateTodoMutationVariables,
    CreateTodoProps<TChildProps>
  >(CreateTodoDocument, {
    alias: 'createTodo',
    ...operationOptions
  });
}
export type CreateTodoMutationResult = ApolloReactCommon.MutationResult<
  CreateTodoMutation
>;
export type CreateTodoMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateTodoMutation,
  CreateTodoMutationVariables
>;
export const TokenAuthDocument = gql`
  mutation tokenAuth($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`;
export type TokenAuthMutationFn = ApolloReactCommon.MutationFunction<
  TokenAuthMutation,
  TokenAuthMutationVariables
>;
export type TokenAuthComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    TokenAuthMutation,
    TokenAuthMutationVariables
  >,
  'mutation'
>;

export const TokenAuthComponent = (props: TokenAuthComponentProps) => (
  <ApolloReactComponents.Mutation<TokenAuthMutation, TokenAuthMutationVariables>
    mutation={TokenAuthDocument}
    {...props}
  />
);

export type TokenAuthProps<TChildProps = {}> = ApolloReactHoc.MutateProps<
  TokenAuthMutation,
  TokenAuthMutationVariables
> &
  TChildProps;
export function withTokenAuth<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    TokenAuthMutation,
    TokenAuthMutationVariables,
    TokenAuthProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    TokenAuthMutation,
    TokenAuthMutationVariables,
    TokenAuthProps<TChildProps>
  >(TokenAuthDocument, {
    alias: 'tokenAuth',
    ...operationOptions
  });
}
export type TokenAuthMutationResult = ApolloReactCommon.MutationResult<
  TokenAuthMutation
>;
export type TokenAuthMutationOptions = ApolloReactCommon.BaseMutationOptions<
  TokenAuthMutation,
  TokenAuthMutationVariables
>;
export const FetchTodoDocument = gql`
  query fetchTodo {
    todoList {
      id
      title
      complete
    }
  }
`;
export type FetchTodoComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    FetchTodoQuery,
    FetchTodoQueryVariables
  >,
  'query'
>;

export const FetchTodoComponent = (props: FetchTodoComponentProps) => (
  <ApolloReactComponents.Query<FetchTodoQuery, FetchTodoQueryVariables>
    query={FetchTodoDocument}
    {...props}
  />
);

export type FetchTodoProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  FetchTodoQuery,
  FetchTodoQueryVariables
> &
  TChildProps;
export function withFetchTodo<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    FetchTodoQuery,
    FetchTodoQueryVariables,
    FetchTodoProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    FetchTodoQuery,
    FetchTodoQueryVariables,
    FetchTodoProps<TChildProps>
  >(FetchTodoDocument, {
    alias: 'fetchTodo',
    ...operationOptions
  });
}
export type FetchTodoQueryResult = ApolloReactCommon.QueryResult<
  FetchTodoQuery,
  FetchTodoQueryVariables
>;
export const CreateUserDocument = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      user {
        id
        username
      }
    }
  }
`;
export type CreateUserMutationFn = ApolloReactCommon.MutationFunction<
  CreateUserMutation,
  CreateUserMutationVariables
>;
export type CreateUserComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    CreateUserMutation,
    CreateUserMutationVariables
  >,
  'mutation'
>;

export const CreateUserComponent = (props: CreateUserComponentProps) => (
  <ApolloReactComponents.Mutation<
    CreateUserMutation,
    CreateUserMutationVariables
  >
    mutation={CreateUserDocument}
    {...props}
  />
);

export type CreateUserProps<TChildProps = {}> = ApolloReactHoc.MutateProps<
  CreateUserMutation,
  CreateUserMutationVariables
> &
  TChildProps;
export function withCreateUser<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    CreateUserMutation,
    CreateUserMutationVariables,
    CreateUserProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    CreateUserMutation,
    CreateUserMutationVariables,
    CreateUserProps<TChildProps>
  >(CreateUserDocument, {
    alias: 'createUser',
    ...operationOptions
  });
}
export type CreateUserMutationResult = ApolloReactCommon.MutationResult<
  CreateUserMutation
>;
export type CreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>;

import gql from "graphql-tag";

const ADD_TODO = gql`
  mutation AddTodo($content: String!) {
    addTodo(content: $content) {
      id
      content
    }
  }
`;

const GET_TODOS = gql`
  {
    todos {
      id
      content
      likes
    }
  }
`;

const DELETE_TODO = gql`
  mutation DeleteTodo($ID: ID) {
    deleteTodo(id: $ID) {
      id
    }
  }
`;

const GET_TODO = gql`
  query Todo($id: ID!) {
    todo(id: $id) {
      id
      content
      likes
    }
  }
`;

const TODO_LIKE = gql`
  mutation TodoLike($id: ID) {
    likeTodo(id: $id) {
      id
      likes
    }
  }
`;

const UPDATE_TODO = gql`
  mutation UpdateTodo($id: ID!, $content: String!) {
    updateTodo(id: $id, content: $content) {
      id
    }
  }
`;

export { TODO_LIKE, GET_TODO, DELETE_TODO, GET_TODOS, ADD_TODO, UPDATE_TODO };

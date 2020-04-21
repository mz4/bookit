import { Mutation } from "react-apollo";
import React from "react";

import { DELETE_TODO, GET_TODOS } from "./../queries";
const DeleteTodo = ({ id }) => {
  return (
    <Mutation
      mutation={DELETE_TODO}
      update={(cache, { data: { deleteTodo } }) => {
        const { todos } = cache.readQuery({ query: GET_TODOS });
        cache.writeQuery({
          query: GET_TODOS,
          data: { todos: todos.filter(todo => todo.id !== id) }
        });
      }}
    >
      {deleteTodo => (
        <i
          className="delete"
          onClick={e => {
            e.target.classList.add("button", "is-loading", "no-border");
            deleteTodo({ variables: { ID: id } });
          }}
        >
          delete
        </i>
      )}
    </Mutation>
  );
};

export default DeleteTodo;

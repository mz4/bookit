import React from "react";
import { Mutation } from "react-apollo";
import { TODO_LIKE, GET_TODOS } from "../queries";

const TodoLike = ({ id, likes }) => {
  return (
    <Mutation
      mutation={TODO_LIKE}
      update={(cache, { data: { likeTodo } }) => {
        const data = cache.readQuery({ query: GET_TODOS });
        data.todos.forEach(todo => {
          if (todo.id === id) {
            todo.likes = likeTodo.likes;
          }
        });
        cache.writeQuery({
          query: GET_TODOS,
          data
        });
      }}
    >
      {likeTodo => {
        return (
          <i
            className="fas fa-heart has-text-danger"
            onClick={() => {
              likeTodo({
                variables: { id },
                optimisticResponse: {
                  __typename: "Mutation",
                  likeTodo: {
                    id,
                    __typename: "Todo",
                    likes: likes + 1
                  }
                }
              });
            }}
          />
        );
      }}
    </Mutation>
  );
};

export default TodoLike;

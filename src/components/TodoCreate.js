import { Mutation } from "react-apollo";
import React, { useState } from "react";
import useLoading from "./../hooks/useLoading";
import { ADD_TODO, GET_TODOS } from "../queries";
const TodoCreate = props => {
  const [setLoadingButton, setLoadingState] = useLoading({
    classList: ["is-loading", "no-border"]
  });
  const [content, setContent] = useState("");

  return (
    <Mutation
      mutation={ADD_TODO}
      update={(cache, { data: { addTodo } }) => {
        try {
          const { todos } = cache.readQuery({ query: GET_TODOS });
          cache.writeQuery({
            query: GET_TODOS,
            data: { todos: todos.concat([{ ...addTodo, likes: 0 }]) }
          });
        } catch (e) {
        } finally {
          setLoadingState(false);
        }
      }}
    >
      {addTodo => (
        <div className="todo_form">
          <h4 className="todo_form__title">Add Todo</h4>
          <form
            onSubmit={e => {
              e.preventDefault();
              setLoadingState(true);
              addTodo({ variables: { content } });
              setContent("");
            }}
          >
            <div className="field">
              <div className="control">
                <input
                  autoCorrect="false"
                  autoCapitalize="false"
                  className="input"
                  type="text"
                  onChange={e => setContent(e.target.value)}
                />
              </div>
            </div>
            <button
              className="button is-light"
              type="submit"
              ref={setLoadingButton}
            >
              Create Todo
            </button>
          </form>
        </div>
      )}
    </Mutation>
  );
};

export default TodoCreate;

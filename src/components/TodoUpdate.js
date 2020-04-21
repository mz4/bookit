import { Mutation, Query } from "react-apollo";
import React, { useState } from "react";
import Loading from "./Loading";
import useLoading from "./../hooks/useLoading";

import { UPDATE_TODO, GET_TODOS, GET_TODO } from "../queries";
const TodoUpdate = ({ todo }) => {
  const [setLoadingButton, setLoadingState] = useLoading({
    classList: ["is-loading", "no-border"]
  });
  const [content, setContent] = useState("");

  return (
    <Query query={GET_TODO} variables={{ id: todo.id }}>
      {({ loading, error, data: { todo } }) => {
        if (loading) return <Loading />;
        if (error) return `Error!: ${error}`;
        return (
          <Mutation
            mutation={UPDATE_TODO}
            refetchQueries={[{ query: GET_TODOS }]}
            update={() => setLoadingState(false)}
          >
            {updateTodo => {
              return (
                <div className="todo_form">
                  <h4 className="todo_form__title">Update Todo</h4>
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      updateTodo({
                        variables: { id: todo.id, content }
                      });
                      setLoadingState(true);
                      todo.content = content;
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
                          placeholder={todo.content}
                          onChange={e => setContent(e.target.value)}
                        />
                      </div>
                    </div>
                    <button
                      className="button is-light"
                      ref={setLoadingButton}
                      type="submit"
                    >
                      Update Todo
                    </button>
                  </form>
                </div>
              );
            }}
          </Mutation>
        );
      }}
    </Query>
  );
};

export default TodoUpdate;

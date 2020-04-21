import React from "react";

import Loading from "./Loading";
import TodoItem from "./TodoItem";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import { GET_TODOS } from "../queries";

const TodoList = props => (
  <Query query={GET_TODOS}>
    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return `Error! ${error.message}`;
      const { todos } = data;

      return (
        <React.Fragment>
          <div className="cards">
            {todos &&
              todos.map(todo => (
                <TodoItem
                  key={todo.id}
                  {...todo}
                  onUpdate={id => {
                    props.history.push(`/todo/${id}`);
                  }}
                />
              ))}
          </div>
          <Link to="/todos/new">
            <i
              className="fas fa-plus-circle fa-2x has-text-success"
              style={{
                float: "right"
              }}
            />
          </Link>
        </React.Fragment>
      );
    }}
  </Query>
);

export default TodoList;

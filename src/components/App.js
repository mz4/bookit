import React from "react";
import Container from "./Container";
import TodoCreate from "./TodoCreate";
import TodoUpdate from "./TodoUpdate";
import TodoList from "./TodoList";
import { HashRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <Container>
        <Route exact path="/" component={TodoList} />
        <Route exact path="/todos/new" component={TodoCreate} />
        <Route
          exact
          path="/todo/:id"
          render={props => {
            return <TodoUpdate todo={{ id: props.match.params.id }} />;
          }}
        />
      </Container>
    </HashRouter>
  );
};

export default App;

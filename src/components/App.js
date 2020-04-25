import React from "react";
import Container from "./Container";
import BookmarkCreate from "./BookmarkCreate";
import BookmarkUpdate from "./BookmarkUpdate";
import BookmarkList from "./BookmarkList";
import { HashRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <Container>
        <Route exact path="/" component={BookmarkList} />
        <Route exact path="/bookmarks/new" component={BookmarkCreate} />
        <Route
          exact
          path="/bookmark/:id"
          render={props => {
            return <BookmarkUpdate bookmark={{ id: props.match.params.id }} />;
          }}
        />
      </Container>
    </HashRouter>
  );
};

export default App;

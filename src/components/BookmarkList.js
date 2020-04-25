import React from "react";

import Loading from "./Loading";
import BookmarkItem from "./BookmarkItem";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import { GET_BOOKMARKS } from "../queries";

const BookmarkList = props => (
  <Query query={GET_BOOKMARKS}>
    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return `Error! ${error.message}`;
      const { bookmarks } = data;

      return (
        <React.Fragment>
          <div className="cards">
            {bookmarks &&
              bookmarks.map(bookmark => (
                <BookmarkItem
                  key={bookmark.id}
                  {...bookmark}
                  onUpdate={id => {
                    props.history.push(`/bookmark/${id}`);
                  }}
                />
              ))}
          </div>
          <Link to="/bookmarks/new">
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

export default BookmarkList;

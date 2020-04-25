import { Mutation } from "react-apollo";
import React from "react";

import { DELETE_BOOKMARK, GET_BOOKMARKS } from "./../queries";
const DeleteBookmark = ({ id }) => {
  return (
    <Mutation
      mutation={DELETE_BOOKMARK}
      update={(cache, { data: { deleteBookmark } }) => {
        const { bookmarks } = cache.readQuery({ query: GET_BOOKMARKS });
        cache.writeQuery({
          query: GET_BOOKMARKS,
          data: { bookmarks: bookmarks.filter(bookmark => bookmark.id !== id) }
        });
      }}
    >
      {deleteBookmark => (
        <i
          className="delete"
          onClick={e => {
            e.target.classList.add("button", "is-loading", "no-border");
            deleteBookmark({ variables: { ID: id } });
          }}
        >
          delete
        </i>
      )}
    </Mutation>
  );
};

export default DeleteBookmark;

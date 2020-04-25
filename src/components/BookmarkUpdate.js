import { Mutation, Query } from "react-apollo";
import React, { useState } from "react";
import Loading from "./Loading";
import useLoading from "./../hooks/useLoading";

import { UPDATE_BOOKMARK, GET_BOOKMARKS, GET_BOOKMARK } from "../queries";
const BookmarkUpdate = ({ bookmark }) => {
  const [setLoadingButton, setLoadingState] = useLoading({
    classList: ["is-loading", "no-border"]
  });
  const [content, setContent] = useState("");

  return (
    <Query query={GET_BOOKMARK} variables={{ id: bookmark.id }}>
      {({ loading, error, data: { bookmark } }) => {
        if (loading) return <Loading />;
        if (error) return `Error!: ${error}`;
        return (
          <Mutation
            mutation={UPDATE_BOOKMARK}
            refetchQueries={[{ query: GET_BOOKMARKS }]}
            update={() => setLoadingState(false)}
          >
            {updateBookmark => {
              return (
                <div className="bookmark_form">
                  <h4 className="bookmark_form__title">Update Bookmark</h4>
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      updateBookmark({
                        variables: { id: bookmark.id, content }
                      });
                      setLoadingState(true);
                      bookmark.content = content;
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
                          placeholder={bookmark.content}
                          onChange={e => setContent(e.target.value)}
                        />
                      </div>
                    </div>
                    <button
                      className="button is-light"
                      ref={setLoadingButton}
                      type="submit"
                    >
                      Update Bookmark
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

export default BookmarkUpdate;

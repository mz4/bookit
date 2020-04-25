import { Mutation } from "react-apollo";
import React, { useState } from "react";
import useLoading from "../hooks/useLoading";
import { ADD_BOOKMARK, GET_BOOKMARKS } from "../queries";
const BookmarkCreate = props => {
  const [setLoadingButton, setLoadingState] = useLoading({
    classList: ["is-loading", "no-border"]
  });
  const [content, setContent] = useState("");

  return (
    <Mutation
      mutation={ADD_BOOKMARK}
      update={(cache, { data: { addBookmark } }) => {
        try {
          const { bookmarks } = cache.readQuery({ query: GET_BOOKMARKS });
          cache.writeQuery({
            query: GET_BOOKMARKS,
            data: { bookmarks: bookmarks.concat([{ ...addBookmark, likes: 0 }]) }
          });
        } catch (e) {
        } finally {
          setLoadingState(false);
        }
      }}
    >
      {addBookmark => (
        <div className="bookmark_form">
          <h4 className="bookmark_form__title">Add Bookmark</h4>
          <form
            onSubmit={e => {
              e.preventDefault();
              setLoadingState(true);
              addBookmark({ variables: { content } });
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
              Create
            </button>
          </form>
        </div>
      )}
    </Mutation>
  );
};

export default BookmarkCreate;

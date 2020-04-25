import React from "react";
import { Mutation } from "react-apollo";
import { BOOKMARK_LIKE, GET_BOOKMARKS } from "../queries";

const BookmarkLike = ({ id, likes }) => {
  return (
    <Mutation
      mutation={BOOKMARK_LIKE}
      update={(cache, { data: { likeBookmark } }) => {
        const data = cache.readQuery({ query: GET_BOOKMARKS });
        data.bookmarks.forEach(bookmark => {
          if (bookmark.id === id) {
            bookmark.likes = likeBookmark.likes;
          }
        });
        cache.writeQuery({
          query: GET_BOOKMARKS,
          data
        });
      }}
    >
      {likeBookmark => {
        return (
          <i
            className="fas fa-heart has-text-danger"
            onClick={() => {
              likeBookmark({
                variables: { id },
                optimisticResponse: {
                  __typename: "Mutation",
                  likeBookmark: {
                    id,
                    __typename: "Bookmark",
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

export default BookmarkLike;

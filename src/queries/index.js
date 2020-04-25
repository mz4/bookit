import gql from "graphql-tag";

const ADD_BOOKMARK = gql`
  mutation AddBookmark($content: String!) {
    addBookmark(content: $content) {
      id
      content
    }
  }
`;

const GET_BOOKMARKS = gql`
  {
    bookmarks {
      id
      content
      likes
    }
  }
`;

const DELETE_BOOKMARK = gql`
  mutation DeleteBookmark($ID: ID) {
    deleteBookmark(id: $ID) {
      id
    }
  }
`;

const GET_BOOKMARK = gql`
  query Bookmark($id: ID!) {
    bookmark(id: $id) {
      id
      content
      likes
    }
  }
`;

const BOOKMARK_LIKE = gql`
  mutation BookmarkLike($id: ID) {
    likeBookmark(id: $id) {
      id
      likes
    }
  }
`;

const UPDATE_BOOKMARK = gql`
  mutation UpdateBookmark($id: ID!, $content: String!) {
    updateBookmark(id: $id, content: $content) {
      id
    }
  }
`;

export { BOOKMARK_LIKE, GET_BOOKMARK, DELETE_BOOKMARK, GET_BOOKMARKS, ADD_BOOKMARK, UPDATE_BOOKMARK };

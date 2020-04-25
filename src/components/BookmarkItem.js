import React from "react";
import BookmarkDelete from "./BookmarkDelete";
import BookmarkLike from "./BookmarkLike";

const BookmarkItem = ({ id, likes, content, onUpdate, onVisit }) => (
  <div className="card">
    <header className="card-header">
      <p className="card-header-title">Bookmark {id.substring(0, 4)}</p>
    </header>
    <div className="card-content">
      <a href={content} target="_blank">
        <div className="content">
          {content}
        </div>
      </a>
    </div>
    <footer className="card-footer">
      <div className="card-footer-item">
        <span className="card__likes"> {likes} &nbsp;</span>
        <BookmarkLike {...{ id, likes }} />
      </div>
      <a href="#" className="card-footer-item">
        <i
          className="fas fa-edit"
          onClick={e => {
            e.preventDefault();
            onUpdate(id);
          }}
        />
      </a>
      <a href="#" className="card-footer-item ">
        <BookmarkDelete {...{ id }} />
      </a>
    </footer>
  </div>
);

export default BookmarkItem;

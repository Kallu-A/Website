"use client";

interface BookData {
  title: string;
  color: string;
  height: string;
  icon?: string;
}

interface LibraryProps {
  Books: BookData[];
  sectionTitle?: string;
  top?: string | number;
  right?: string | number;
  left?: string | number;
  bottom?: string | number;
  scale?: number;
}

export default function Library({
  Books,
  sectionTitle,
  top,
  right,
  left,
  bottom,
  scale = 1,
}: LibraryProps) {
  const containerStyle: React.CSSProperties = {
    position: "absolute",
    top: top,
    right: right,
    left: left,
    bottom: bottom,
    transform: `scale(${scale})`,
    transformOrigin: top && right ? "top right" : "top left",
  };

  return (
    <div className="library-container" style={containerStyle}>
      {sectionTitle && (
        <div className="sign-container">
          <div className="sign-ropes">
            <div className="rope"></div>
            <div className="rope"></div>
          </div>
          <div className="sign-board">{sectionTitle}</div>
        </div>
      )}

      <div className="shelf">
        {Books.map((book, index) => (
          <div key={index} className="book-container">
            <div
              className="book"
              style={{ backgroundColor: book.color, height: book.height }}
            >
              {book.icon && (
                <div className="book-icon-wrapper">
                  <img
                    src={`/Website/${book.icon}`}
                    alt=""
                    className="book-icon"
                  />
                </div>
              )}
              <div className="book-spine-detail"></div>
              <span className="book-title">{book.title}</span>
            </div>
            <div className="book-shadow"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

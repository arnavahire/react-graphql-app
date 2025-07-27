import React from "react";
import { useQuery, gql } from "@apollo/client";

// Define an interface for the shape of a single book object.
interface Book {
  title: string;
  author: string;
}

// Define an interface for the entire data structure returned by the query.
interface BookData {
  books: Book[]; // The 'books' field will be an array of Book objects.
}

const BOOK_DATA = gql`
  query bookQuery {
    books {
      title
      author
    }
  }
`;

export const Book: React.FC = () => {
  const { data, loading, error } = useQuery<BookData>(BOOK_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  // Type guard: If data or data.books is undefined, or books array is empty, handle it here.
  if (!data || !data.books || data.books.length === 0) {
    return <p>No books found.</p>; // Or null, or a different message
  }

  return (
    <div>
      {data?.books?.length > 0 &&
        data.books.map(({ title, author }) => {
          return (
            <div key={title}>
              <p>{title}</p>
              <p>{author}</p>
            </div>
          );
        })}
    </div>
  );
};

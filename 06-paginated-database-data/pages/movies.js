import { Client } from "@notionhq/client";
import { useState } from "react";

const Movies = ({ movies }) => {
  console.log(movies.length);
  const [movie, setMovie] = useState(null);

  const chooseMovie = () => {
    const randomNumber = Math.floor(Math.random() * movies.length);
    setMovie(movies[randomNumber]);
  };

  return (
    <>
      <button onClick={chooseMovie}>Choose movie</button>
      {movie && <pre>{JSON.stringify(movie, null, 2)}</pre>}
    </>
  );
};

export const getStaticProps = async () => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  let results = [];

  let data = await notion.databases.query({
    database_id: process.env.DATABASE_ID,
    filter: {
      property: "Watched",
      checkbox: {
        equals: false,
      },
    },
  });

  results = [...data.results];

  while (data.has_more) {
    data = await notion.databases.query({
      database_id: process.env.DATABASE_ID,
      filter: {
        property: "Watched",
        checkbox: {
          equals: false,
        },
      },
      start_cursor: data.next_cursor,
    });

    results = [...results, ...data.results];
  }

  const movies = results.map((movie) => ({
    id: movie.id,
    title: movie.properties.Title.title[0].plain_text,
    categories: movie.properties.Categories.multi_select.map(
      (category) => category.name
    ),
  }));

  return {
    props: {
      movies,
    },
  };
};

export default Movies;

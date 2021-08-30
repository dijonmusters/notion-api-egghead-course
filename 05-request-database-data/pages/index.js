const Home = ({ quote }) => {
  return <p>{JSON.stringify(quote)}</p>;
};

export const getStaticProps = async () => {
  // fetch data
  // create static pages
  const quote = await fetch(
    "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
  ).then((resp) => resp.json());

  return {
    props: {
      quote,
    },
  };
};

export default Home;

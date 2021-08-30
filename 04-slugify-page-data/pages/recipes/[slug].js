import { Client } from "@notionhq/client";
import slugify from "slugify";

const Recipe = ({ recipe }) => {
  return <pre>{JSON.stringify(recipe, null, 2)}</pre>;
};

export const getStaticPaths = async () => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  const data = await notion.blocks.children.list({
    block_id: process.env.PAGE_ID,
  });

  const paths = [];

  data.results.forEach((result) => {
    if (result.type === "child_page") {
      paths.push({
        params: {
          slug: slugify(result.child_page.title).toLowerCase(),
        },
      });
    }
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  // fetch details for recipe
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  const data = await notion.blocks.children.list({
    block_id: process.env.PAGE_ID,
  });

  const page = data.results.find((result) => {
    if (result.type === "child_page") {
      const { title } = result.child_page;
      const resultSlug = slugify(title).toLowerCase();
      return resultSlug === slug;
    }
    return false;
  });

  const blocks = await notion.blocks.children.list({
    block_id: page.id,
  });

  const title = page.child_page.title;
  const ingredients = [];
  const method = [];

  blocks.results.forEach((block) => {
    if (block.type === "bulleted_list_item") {
      ingredients.push(block.bulleted_list_item.text[0].plain_text);
    }

    if (block.type === "numbered_list_item") {
      method.push(block.numbered_list_item.text[0].plain_text);
    }
  });

  return {
    props: {
      recipe: {
        title,
        ingredients,
        method,
      },
    },
  };
};

export default Recipe;

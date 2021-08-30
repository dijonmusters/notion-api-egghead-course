# Use the Notion API to request block data in Next.js

**[📹 Video](https://egghead.io/lessons/egghead-use-the-notion-api-to-request-block-data-in-next-js-8a40dd6a)**

In this video we will learn how to use Notion's client library to request block data and display the details of each of our recipes.

We will be pre-generating these static pages at build-time by using Next.js' `getStaticProps` function, however, because our recipe IDs can be a nearly infinite number of options, we need to explicitly tell Next.js every possible option we would like to create a static page for.

In order to do this, we use Next.js' `getStaticPaths` function. This allows us to make a request to the Notion API for all of our recipes, and provide Next.js with a finite collection of possible paths.

[👉 Next lesson](/04-slugify-page-data)

---

Enjoyed the course? Check out some others at [jonmeyers.io](https://jonmeyers.io/courses), follow on [Twitter](https://twitter.com/_dijonmusters) and subscribe to [YouTube channel](https://www.youtube.com/channel/UCPitAIwktfCfcMR4kDWebDQ).

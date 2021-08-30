# Build a recipe website and movie picker with the Notion API and Next.js

> This repo accompanies a free community collection of videos on egghead.

## 🔍 About

In this course, we look at building apps with the Notion API and Next.js. We start by learning about generating static pages with pre-rendering in Next.js, and the performance benefits this unlocks.

We build two examples to cover the concepts in this course. The first is a recipe website backed by a collection of nested Notion pages. This demonstrates how to create an integration and share data with it. Additionally, we cover how to parse the structure of the response data, and transform it into something that makes sense for our React components.

We learn about the different types of data that exist in Notion's page and block types, and when we need to use each. Lastly, we cover using slugified URLs instead of recipe IDs, making our links much more pleasant and trustworthy.

The second example we build is a movie picker. This fetches data from a Notion Database and helps to suggest a movie we can watch. This module covers requesting data from a Database, iterating over cursor-based pagination to fetch all results from a large dataset, performing mutations on properties in a Database and Next.js' Incremental Static Regeneration.

This course is a great introduction to the Notion API, but also covers the foundational Next.js features that make it so powerful!

## 🎓 Instructor

[Jon Meyers](https://jonmeyers.io) is a Software Engineer, Educator and Hip Hop Producer from Melbourne, Australia. He's passionate about web development and enabling others to build amazing things!

[Jon's courses at egghead.](https://egghead.io/instructors/jon-meyers)

Enjoyed the course? Check out some others at [jonmeyers.io](https://jonmeyers.io/courses), follow on [Twitter](https://twitter.com/_dijonmusters) and subscribe to [YouTube channel](https://www.youtube.com/channel/UCPitAIwktfCfcMR4kDWebDQ).

## 🗺 Table of Contents

1. [Pregenerate Static Pages with Next.js](/01-generate-static-pages)
2. [Request page data for Next.js from the Notion API](/02-request-page-data)
3. [Use the Notion API to Request block data in Next.js](/03-request-block-data)
4. [Use slugified titles for URL in Next.js with the Notion API](/04-slugify-page-data)
5. [Request Notion database data from the API with Next.js](/05-request-database-data)
6. [Request paginated data from Notion API with Next.js](/06-paginated-database-data)
7. [Update database with Next.js using the Notion API](/07-update-database-properties)
8. [Use Next.js Incremental Static Regeneration to pregenerate Notion API pages on-demand](/08-incremental-static-regeneration)

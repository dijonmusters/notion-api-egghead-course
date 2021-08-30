# Mutate database fields with Next.js using the Notion API

**[📹 Video](https://egghead.io/lessons/next-js-mutate-database-fields-with-next-js-using-the-notion-api)**

In this video, we learn how to perform mutations with the Notion API, and update properties in our Notion Database.

By adding a button to our Next.js application, users can now mark a movie as watched - which will permanently update this value in our Notion Database. Since this action is based off user input, we need to make sure we don't expose our API secrets on the client.

We can keep this value secure by implementing a serverless function to perform the mutation, and calling this URL endpoint from the client, when the user clicks the button.

This is surprisingly easy to do in Next.js using API routes. Simply create a `pages/api` folder and any JS files within it will automatically be turned into serverless functions. Variables such as the movie's `id` and `is_watched` - can be passed to the serverless function, via the request's body.

Additionally, we use the `axios` package to perform the `HTTP` request, as its API is slightly nicer to work with than the built-in `fetch` library.

[👉 Next lesson](/08-incremental-static-regeneration)

---

Enjoyed the course? Check out some others at [jonmeyers.io](https://jonmeyers.io/courses), follow on [Twitter](https://twitter.com/_dijonmusters) and subscribe to [YouTube channel](https://www.youtube.com/channel/UCPitAIwktfCfcMR4kDWebDQ).

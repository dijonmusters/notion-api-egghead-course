# Request Notion database data from the API with Next.js

**[📹 Video](https://egghead.io/lessons/next-js-request-notion-database-data-from-the-api-with-next-js)**

In this video we learn how to use Notion's client library to request data from a Database, and display the results in our Next.js application.

We will be adding a new page to our application that will help select a random movie for us to watch, using data from our Notion Database. To authorize access to this Database we must add it as an integration, and create a client using the Notion Secret value. Again, we will be pre-rendering this static page at build-time, using Next.js' getStaticProps function.

Additionally, we will learn how to filter and transform our data on the server-side, so we are only passing our component the necessary data for it to render our movies. Lastly, we implement a `chooseMovie` function that can choose a random value between the bounds of the lowest and highest index of our movies array.

[👉 Next lesson](/06-paginated-database-data)

---

Enjoyed the course? Check out some others at [jonmeyers.io](https://jonmeyers.io/courses), follow on [Twitter](https://twitter.com/_dijonmusters) and subscribe to [YouTube channel](https://www.youtube.com/channel/UCPitAIwktfCfcMR4kDWebDQ).

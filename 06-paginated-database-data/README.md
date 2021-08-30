# Request paginated data from Notion API with Next.js

**[📹 Video](https://egghead.io/lessons/next-js-request-paginated-data-from-notion-api-with-next-js)**

In this video, we learn how to implement cursor-based pagination in our Next.js application, to request all movies from the Notion Database.

By default, Notion will return 100 results per request to the API. Therefore, we need to continue fetching results until we have the full set. This can be done using a `while` loop that checks the `has_more` field, returned by Notion's API, to determine whether we have fetched every movie.

If the `has_more` property is true, Notion will also provide a cursor value to fetch the next 100 results. When the `has_more` field is set to false, we have retrieved all movies from the Database, and can stop looping.

[👉 Next lesson](/07-update-database-properties)

---

Enjoyed the course? Check out some others at [jonmeyers.io](https://jonmeyers.io/courses), follow on [Twitter](https://twitter.com/_dijonmusters) and subscribe to [YouTube channel](https://www.youtube.com/channel/UCPitAIwktfCfcMR4kDWebDQ).

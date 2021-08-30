# Use slugified titles for URL in Next.js with the Notion API

**[📹 Video](https://egghead.io/lessons/egghead-use-slugified-titles-for-url-in-next-js-with-the-notion-api-ac659e22)**

In this video we refactor the structure of our recipe details URL to use its slugified title, rather than its ID. In order to accomplish this, we use an npm library called `slugify`. This is a function that allows us to pass in a string in sentence form, and get back a hyphenated version that we can safely use in our URL.

Since our recipe details page is using the recipe's ID to request data from Notion's API, this requires us to make some additional requests and manually work out which recipe correlates to the URL's slug.

This gives us a much prettier URL to send to people and, since the URL now contains the title of our recipe, it communicates much more clearly what to expect when the link is clicked.

[👉 Next lesson](/05-request-database-data)

---

Enjoyed the course? Check out some others at [jonmeyers.io](https://jonmeyers.io/courses), follow on [Twitter](https://twitter.com/_dijonmusters) and subscribe to [YouTube channel](https://www.youtube.com/channel/UCPitAIwktfCfcMR4kDWebDQ).

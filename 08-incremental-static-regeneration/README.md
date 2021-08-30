# Use Next.js Incremental Static Regeneration to pregenerate Notion API pages on-demand

**[📹 Video](https://egghead.io/lessons/next-js-use-next-js-incremental-static-regeneration-to-pregenerate-notion-api-pages-on-demand)**

In this video, we learn how to use Next.js' `Incremental Static Regeneration` to dynamically create new static assets per route.

Incremental Static Regeneration (ISR) is a great compromise between the performance benefits of static sites/pre-rendered pages and serving up fresh content.

Each time a user visits a particular route, they are served a static page. This is the case for anytime you declare a `getStaticProps` function, however with ISR, Next.js runs the `getStaticProps` function again in the background and creates a new static page for that route. The next person to visit the route will see the newly generated page. We can specify a timeout period to avoid this happening too frequently.

ISR is a complicated concept, but is super easy to implement in Next.js. Simply return `revalidate: 60` from the `getStaticProps` function, and enjoy the magic!

---

Enjoyed the course? Check out some others at [jonmeyers.io](https://jonmeyers.io/courses), follow on [Twitter](https://twitter.com/_dijonmusters) and subscribe to [YouTube channel](https://www.youtube.com/channel/UCPitAIwktfCfcMR4kDWebDQ).

import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import { commentsCollection } from "./mongo.ts";

const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "Welcome to dinosaur API!";
  })
  .get("/api", async (context) => {
    context.response.body = await commentsCollection.find({}, {
      limit: parseInt(context.request.url.searchParams.get("limit") || "20"),
      skip: parseInt(context.request.url.searchParams.get("skip") || "0"),
      sort: { time: -1 },
    }).toArray();
  });

const app = new Application();
app.use(oakCors()); // Enable CORS for All Routes
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });

import { Elysia, t } from "elysia";
import config from "../config/config";
import { cors } from "@elysiajs/cors";
import doINeedUmbrella from "./weather/doINeedUmbrella";

const app = new Elysia()
  .use(cors({ origin: config.CORS_ALLOW_ORIGIN }))
  .get(
    "/umbrella",
    async ({ query }) => {
      const data = await doINeedUmbrella(query);
      return data;
    },
    {
      query: t.Object({
        latitude: t.String(),
        longitude: t.String(),
      }),
    }
  )
  .get("/", () => "Hello Elysia")
  .listen(config.PORT as unknown as number);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

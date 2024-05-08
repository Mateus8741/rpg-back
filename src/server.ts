import fastifyCors from "@fastify/cors";
import fastify from "fastify";
import { ZodTypeProvider, serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { createHero } from "./routes/createHero";
import { getAllHeroes } from "./routes/getAllHeroes";
import { getOneHero } from "./routes/getOneHero";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createHero);
app.register(getAllHeroes);
app.register(getOneHero);

app.listen({port: 3100, host: "0.0.0.0"}).then(() => {
  console.log("Server is running on port 3000");
});
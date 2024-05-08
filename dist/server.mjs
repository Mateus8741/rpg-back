import {
  createHero
} from "./chunk-37XRBTDU.mjs";
import {
  getAllHeroes
} from "./chunk-JTNVEAGA.mjs";
import {
  getOneHero
} from "./chunk-GCPGIGFI.mjs";
import "./chunk-6VR3Y22B.mjs";
import "./chunk-7QDIDUNV.mjs";

// src/server.ts
import fastifyCors from "@fastify/cors";
import fastify from "fastify";
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
var app = fastify().withTypeProvider();
app.register(fastifyCors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createHero);
app.register(getAllHeroes);
app.register(getOneHero);
app.listen({ port: 3100, host: "0.0.0.0" }).then(() => {
  console.log("Server is running on port 3000");
});

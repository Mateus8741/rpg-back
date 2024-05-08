import {
  createHero
} from "./chunk-DMDMKKUL.js";
import {
  getAllHeroes
} from "./chunk-KT6QZ6FX.js";
import {
  getOneHero
} from "./chunk-QG2MHDFN.js";
import "./chunk-TVWJO2T5.js";
import "./chunk-5JHW7AR4.js";

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
app.listen({ port: 3100 }).then(() => {
  console.log("Server is running on port 3000");
});

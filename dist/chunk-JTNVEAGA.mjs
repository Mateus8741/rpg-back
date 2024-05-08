import {
  prisma
} from "./chunk-6VR3Y22B.mjs";

// src/routes/getAllHeroes.ts
async function getAllHeroes(app) {
  app.get("/forms", async (request, reply) => {
    const heroes = await prisma.hero.findMany();
    return heroes;
  });
}

export {
  getAllHeroes
};

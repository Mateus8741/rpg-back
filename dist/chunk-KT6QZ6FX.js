import {
  prisma
} from "./chunk-TVWJO2T5.js";

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

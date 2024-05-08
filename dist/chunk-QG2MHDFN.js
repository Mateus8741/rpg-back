import {
  prisma
} from "./chunk-TVWJO2T5.js";

// src/routes/getOneHero.ts
import z from "zod";
async function getOneHero(app) {
  app.get("/forms/:id", {
    schema: {
      params: z.object({
        id: z.string()
      })
    }
  }, async (request, reply) => {
    const id = request.params;
    const hero = await prisma.hero.findUnique({
      where: {
        id
      },
      include: {
        fobias: true,
        habilidade: true,
        inventario: true
      }
    });
    if (!hero) {
      reply.status(404).send({ message: "Hero not found" });
      return;
    }
    reply.status(200).send(hero);
  });
}

export {
  getOneHero
};

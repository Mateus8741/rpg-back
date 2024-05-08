import { FastifyInstance } from "fastify";
import z from "zod";
import { prisma } from "../prisma/prisma-client";

export async function getOneHero(app: FastifyInstance) {
    app.get("/forms/:id", {
        schema: {
            params: z.object({
                id: z.string(),
            }),
        },
    }, async (request, reply) => {
        const id = request.params as string;

        const hero = await prisma.hero.findUnique({
            where: {
                id,
            },
            include: {
                fobias: true,
                habilidade: true,
                inventario: true,
            },
        })

        if (!hero) {
            reply.status(404).send({ message: "Hero not found" });
            return;
        }

        reply.status(200).send(hero);
    });
}
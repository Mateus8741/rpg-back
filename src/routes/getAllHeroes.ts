import { FastifyInstance } from "fastify";
import { prisma } from "../prisma/prisma-client";

export async function getAllHeroes(app:FastifyInstance) {
    app.get("/forms", async (request, reply) => {
        const heroes = await prisma.hero.findMany();
       
        return heroes;
    });
    
}
import {
  prisma
} from "./chunk-6VR3Y22B.mjs";
import {
  createFormSchema
} from "./chunk-7QDIDUNV.mjs";

// src/routes/createHero.ts
async function createHero(app) {
  app.withTypeProvider().post("/forms", {
    schema: {
      body: createFormSchema
    }
  }, async (request, reply) => {
    const data = request.body;
    const newHero = await prisma.hero.create({
      data: {
        nome: data.nome,
        level: Number(data.level),
        exp: Number(data.exp),
        gold: Number(data.gold),
        hp: Number(data.hp),
        mp: Number(data.mp),
        forca: String(data.forca),
        agilidade: String(data.agilidade),
        destreza: String(data.destreza),
        constituicao: String(data.constituicao),
        inteligencia: String(data.inteligencia),
        fobias: {
          create: data.fobias.map((fobia) => ({
            monstro: fobia.monstro,
            quantidade: fobia.quantidade
          }))
        },
        maxAtk: Number(data.maxAtk),
        maxDef: Number(data.maxDef),
        habilidade: {
          create: data.habilidade.map((habilidade) => ({
            nome: habilidade.nome,
            desgaste: habilidade.desgaste,
            custoMP: habilidade.custoMP
          }))
        },
        inventario: {
          create: data.inventario.map((inventario) => ({
            nome: inventario.nome,
            quantidade: inventario.quantidade
          }))
        },
        cabeca: data.cabeca,
        peito: data.peito,
        luvas: data.luvas,
        botas: data.botas,
        armaEsquerda: data.armaEsquerda,
        armaDireita: data.armaDireita
      },
      include: {
        fobias: true,
        habilidade: true,
        inventario: true
      }
    });
    return newHero;
  });
}

export {
  createHero
};

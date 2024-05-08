// src/schemas/createFormSchema.ts
import { z } from "zod";
var createFormSchema = z.object({
  id: z.string().optional(),
  nome: z.string().min(3).max(20),
  level: z.string().min(1).max(100),
  exp: z.string().min(0).max(1e6),
  gold: z.string().min(0).max(1e6),
  maxAtk: z.string().min(0).max(1e6),
  maxDef: z.string().min(0).max(1e6),
  cabeca: z.string(),
  peito: z.string(),
  luvas: z.string(),
  botas: z.string(),
  armaEsquerda: z.string(),
  armaDireita: z.string(),
  hp: z.string().min(0).max(1e6),
  mp: z.string().min(0).max(1e6),
  forca: z.string().min(0).max(1e6),
  agilidade: z.string().min(0).max(1e6),
  destreza: z.string().min(0).max(1e6),
  constituicao: z.string().min(0).max(1e6),
  inteligencia: z.string().min(0).max(1e6),
  fobias: z.array(
    z.object({
      monstro: z.string(),
      quantidade: z.string().min(0).max(1e6)
    })
  ),
  habilidade: z.array(
    z.object({
      nome: z.string(),
      desgaste: z.string().min(0).max(1e6),
      custoMP: z.string().min(0).max(1e6)
    })
  ),
  inventario: z.array(
    z.object({
      nome: z.string(),
      quantidade: z.string().min(0).max(1e6)
    })
  )
});

export {
  createFormSchema
};

import {createPrisma} from "./prisma-helper";
import {CatDocument} from "./cat-document";

async function create(content: string) {
  return await createPrisma()
    .catDocument
    .create({
      data: {
        createdAt: new Date(),
        catName: "노르웨이 숲",
        content: content
      }
    });
}

async function findById(catDocumentId: string) {
  return await createPrisma()
    .catDocument
    .findUnique({
      where: {id: catDocumentId}
    });
}

async function findAll(): Promise<CatDocument[]> {
  return await createPrisma()
    .catDocument
    .findMany();
}

export {create, findById, findAll};
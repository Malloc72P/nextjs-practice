import {createPrisma} from "./prisma-helper";
import {CatDocument} from "./cat-document";

async function create(catName: string, content: string) {
  return await createPrisma()
    .catDocument
    .create({
      data: {
        createdAt: new Date(),
        catName: catName,
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

async function findByCatName(catName: string) {
  return await createPrisma()
    .catDocument
    .findUnique({
      where: {catName: catName}
    });
}


async function findAll(): Promise<CatDocument[]> {
  return await createPrisma()
    .catDocument
    .findMany();
}

export {create, findById, findByCatName, findAll};

import {PrismaClient, Prisma} from '@prisma/client'
import {testData} from "../lib/test-data-utils";

const prisma = new PrismaClient();

const catDocumentCreateInputs: Prisma.CatDocumentCreateInput[] = [];
testData.forEach((data) =>
  catDocumentCreateInputs.push({
      catName: data.catName,
      content: data.content,
      createdAt: new Date()
    }
  ));

async function main() {
  console.log(`Start seeding ...`)
  for (const catDocumentCreateInput of catDocumentCreateInputs) {
    const user = await prisma.catDocument
      .create({
        data: catDocumentCreateInput,
      });
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
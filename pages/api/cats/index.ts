import {NextApiRequest, NextApiResponse} from "next";
import {create, findAll} from "../../../lib/neko-document-service";

interface GetCatDocumentsDTO {
  documents: string[];
}

async function onGET(response: NextApiResponse) {
  const catDocuments = await findAll();
  const catDocumentPreviews = catDocuments.map(catDocument => catDocument.catName);

  response.status(200).json({
    documents: catDocumentPreviews
  });
}

async function onPOST(request: NextApiRequest, response: NextApiResponse) {
  const catName = request.body.catName;
  const content = request.body.content;

  const newCatDocument = await create(catName, content);
  response.status(200).json({result: "success"});
}


const handler = async (request: NextApiRequest, response: NextApiResponse<GetCatDocumentsDTO>) => {
  const method = request.method;

  switch (method) {
    case "GET":
      await onGET(response);
      break;
    case "POST":
      await onPOST(request, response);
      break;
  }
};

export default handler;
export type {GetCatDocumentsDTO};

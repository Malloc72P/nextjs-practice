import {NextApiRequest, NextApiResponse} from "next";
import {findAll} from "../../../lib/neko-document-service";

interface GetCatDocumentsDTO {
  documents: string[];
}

const handler = async (request: NextApiRequest, response: NextApiResponse<GetCatDocumentsDTO>) => {
  const catDocuments = await findAll();
  const catDocumentPreviews = catDocuments.map(catDocument => catDocument.catName);

  response.status(200).json({
    documents: catDocumentPreviews
  });
};

export default handler;
export type {GetCatDocumentsDTO};

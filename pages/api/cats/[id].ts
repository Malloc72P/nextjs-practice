import {NextApiRequest, NextApiResponse} from "next";
import {CatDocument} from "../../../lib/cat-document";
import {findByCatName} from "../../../lib/neko-document-service";

const handler = async (request: NextApiRequest, response: NextApiResponse<CatDocument>) => {
  const method = request.method;
  const {id} = request.query;

  if (typeof id !== "string") {
    response404(response);
    return
  }

  switch (method) {
    case "GET" :
      await onGet(id, response);
      break;
    default:
      response405(response);
      break;
  }
};

function response404(response: NextApiResponse) {
  response.status(404).json({
    id: "unknown",
    content: "# 존재하지 않는 고양이입니다. - 다른 고양이를 검색해주세요",
    catName: "슈뢰딩거의 고양이",
    createdAt: new Date()
  });
}

function response405(response: NextApiResponse) {
  response.status(405).json({
    id: "unknown",
    content: "# 처리할 수 없는 요청입니다",
    catName: "405 Method Not Allowed Nyaa",
    createdAt: new Date()
  });
}

async function onGet(id: string, response: NextApiResponse) {
  const findCatDocument = await findByCatName(id);

  if (!findCatDocument) {
    response404(response);
    return;
  }

  response.status(200).json(findCatDocument);
}

export default handler;

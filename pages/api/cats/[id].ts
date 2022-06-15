import {NextApiRequest, NextApiResponse} from "next";
import {CatDocument} from "../../../lib/cat-document";
import {findByCatName} from "../../../lib/neko-document-service";

function response404(response: NextApiResponse) {
  response.status(404).json({
    id: "unknown",
    content: "# 존재하지 않는 고양이입니다. - 다른 고양이를 검색해주세요",
    catName: "슈뢰딩거의 고양이",
    createdAt: new Date()
  });
}

const handler = async (request: NextApiRequest, response: NextApiResponse<CatDocument>) => {
  const {id} = request.query;

  if (typeof id !== "string") {
    response404(response);
    return
  }

  const findCatDocument = await findByCatName(id);

  if (!findCatDocument) {
    response404(response);
    return;
  }

  response.status(200).json(findCatDocument);
};

export default handler;
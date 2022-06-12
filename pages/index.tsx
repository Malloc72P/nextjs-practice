import type {GetServerSideProps, InferGetServerSidePropsType, NextPage} from 'next'
import {Layout} from "../components/layout/layout";
import {createPrisma} from "../lib/prisma-helper";
import {Prisma} from "@prisma/client";

const testData = `
# 노르웨이 숲

![](https://w.namu.la/s/8850935300bf98bbb9e7d5d298db234e081a80437cc2c0aa410be2082bb7a66224d20de215f3d2437c1cdecf90ca9ebc68776d22b3a809839bb64119121034accaf9011a849be6ba3cdd7d650f202f8d775196fd4abbbea0f2e874444b3e1471)

### 개요

대표적인 대형묘 중 하나이다. 대체로 메인쿤 다음가는 대형종 고양이라고 보는데, 대형묘 중에서도 풍성한 털로 인해 실제 체격보다 훨씬 크게 느껴진다. 머리가 길고 콧등이 길다. 양쪽 눈과 코를 이으면 정삼각형에 가깝게 되는 것도 특징. 눈은 날카롭게 살짝 치켜 올라간 아몬드 형태이며 색상과 무늬는 매우 다양하다. 귀도 크고 아름답다. 높이도 높고 넓이도 넓으며 귀 끝이 날카로운 형태를 띄고 있다. 귀부인 같은 우아함이 종족 특성인 고양이다.


### 평균 수명

평균 수명은 14~16년이다. 자연 발생종이라 교배로 생겨난 묘종에 비해 여러모로 건강한 편이지만 드물게 유전적으로 치명적인 질환(Glycogen Storage Disease Type IV)이 있다고 한다. 이는 DNA 검사를 통해 발견할 수 있기 때문에 애묘단체에서는 이 종의 고양이를 키우기 전에 꼭 검사할 것을 추천하고 있다.

### 성격

노르웨이 숲은 평소 조용하지만 집안에 개를 같이 키운다면 시끄럽게 굴 수 있다. 그러나 개와 함께 성장했다면 필요 이상으로 울지 않는다. 사람을 매우 좋아해 애교가 많으며 똑똑하다. 에너지적이며 관심받는 것을 좋아하는 편. 이름 그대로 노르웨이 숲에서 살던 고양이라 본능적으로 야외 활동을 좋아한다.다른 고양이보다 식욕이 많은 편이고 수컷이 암컷보다 더 크다. 성격을 한 마디로 표현하자면 개냥이. 이 때문에 처음 고양이를 접하는 사람에게 많이 추천해주는 묘종이기도 하다.

### 기타

외모와 발생 지역으로 보아 북유럽 신화에서 프레이야의 전차를 끈다는 고양이가 이 품종이라고 한다.

다른 대형 장모종인 메인쿤, 시베리안 포레스트와 혼동하는 경우가 있다. 가장 쉽게 판별하는 방법은 고양이 얼굴 옆 선인데 노르웨이 숲은 미간에서 코 끝까지의 선이 일직선이다.

추운 지역의 묘종답게 한파에는 강하지만 폭염에는 약하므로 열사병에 주의해야 한다.

`;

async function create() {
  return await createPrisma()
    .catDocument
    .create({
      data: {
        createdAt: new Date(),
        catName: "노르웨이 숲",
        content: testData
      }
    });
}

async function findById() {
  return await createPrisma()
    .catDocument
    .findUnique({
      where: {id: "62a5544b86846603a0b97814"}
    });
}

async function findAll() {
  return await createPrisma()
    .catDocument
    .findMany();
}


export const getServerSideProps: GetServerSideProps = async () => {
  // const feeds = await create();
  let feeds = await findAll();
  if (feeds.length === 0) {
    await create();
    feeds = await findAll();
  }
  const reParsedFeed = JSON.parse(JSON.stringify(feeds[0]));
  return {
    props: {reParsedFeed}
  };
};

interface HomeProps {
  catDocument: Prisma.CatDocumentSelect;
}

const Home: NextPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout content={props.reParsedFeed.content}></Layout>
  )
}

export default Home

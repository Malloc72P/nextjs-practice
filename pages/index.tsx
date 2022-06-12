import type {GetServerSideProps} from 'next'
import {Layout} from "../components/layout/layout";
import Parser from 'html-react-parser';
import {findAll} from "../lib/neko-document-service";
import {CatDocument} from "../lib/cat-document";
import {useEffect, useState} from "react";
import {markdownToHtml} from "../lib/markdown-to-html";
import {useRouter} from "next/router";

type HomeProps = {
  catDocuments: CatDocument[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  const catDocuments: CatDocument[] = await findAll();
  const convertedCatDocuments = catDocuments
    .map(catDocument => JSON.stringify(catDocument))
    .map(string => JSON.parse(string)) as CatDocument[];
  return {props: {catDocuments: convertedCatDocuments}};
};


const Home = (props: HomeProps) => {
  // 아티클에 출력할 고양이
  const router = useRouter();
  const catParameter = router.query.cat;

  // 마크다운 컨텐츠
  const [markdownContent, setMarkdownContent] = useState<string>("Now Loading");

  async function buildProps() {
    const findCatDocument = props.catDocuments
      .find(catDocument => catDocument.catName === catParameter);

    if(findCatDocument) {
      const convertedMarkdownContent = await markdownToHtml(findCatDocument.content);
      setMarkdownContent(convertedMarkdownContent);
    }
  }

  useEffect(() => {
    buildProps();
  }, []);

  return (
    <Layout catDocuments={props.catDocuments}>
      {Parser(markdownContent)}
    </Layout>
  )
}

export default Home

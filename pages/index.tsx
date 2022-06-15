import type {GetServerSideProps} from 'next'
import {Layout} from "../components/layout/layout";
import {findAll, findByCatName} from "../lib/neko-document-service";
import {CatDocument} from "../lib/cat-document";
import {useEffect, useState} from "react";
import MarkdownContent from "../components/layout/markdown-content";

type HomeProps = {
  content: string;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const indexDocument = await findByCatName("index");
  let content = `
  # 고양이 위키
  
  - 고양이 위키입니다 
  `;
  if (indexDocument !== null) {
    content = indexDocument.content;
  }
  return {props: {content: content}};
};


const Home = (props: HomeProps) => {
  useEffect(() => {
    console.log(props.content);
  }, []);

  return (
    <Layout>
      <MarkdownContent markdownString={props.content}></MarkdownContent>
    </Layout>
  )
}

export default Home

import React, {useEffect, useState} from "react";
import {GetServerSideProps, GetStaticPaths, GetStaticProps} from "next";
import Router, {useRouter} from "next/router";
import {Layout} from "../../components/layout/layout";
import {CatDocument} from "../../lib/cat-document";
import {findAll} from "../../lib/neko-document-service";
import Parser from "html-react-parser";
import {markdownToHtml} from "../../lib/markdown-to-html";
import {GetStaticPropsContext} from "next/types";

type PostProps = {
  catDocuments: CatDocument[];
  currentDocument: CatDocument;
}


function onPageNotFound() {
  return {
    props: {catDocuments: null, currentDocument: null}
  };
}

export async function getStaticPaths() {
  const catDocuments = await findAll();
  const paths = catDocuments.map(catDocument => `/cats/${catDocument.catName}`);
  return {paths, fallback: false};
}

export async function getStaticProps({params}: GetStaticPropsContext) {
  const catNameOptional = params?.catName;

  if (!catNameOptional) {
    return onPageNotFound();
  }

  const catDocuments: CatDocument[] = await findAll();
  const foundCatDocument = catDocuments.find(catDocument => catDocument.catName === catNameOptional);

  if (!foundCatDocument) {
    return onPageNotFound();
  }

  const convertedCatDocuments = catDocuments
    .map(catDocument => JSON.stringify(catDocument))
    .map(string => JSON.parse(string)) as CatDocument[];

  const convertedFoundCatDocument = [foundCatDocument]
    .map(catDocument => JSON.stringify(catDocument))
    .map(string => JSON.parse(string))[0] as CatDocument;

  return {
    props: {catDocuments: convertedCatDocuments, currentDocument: convertedFoundCatDocument}
  };

}

const Post = (props: PostProps) => {
  const [markdownContent, setMarkdownContent] = useState<string>("...loading");
  useEffect(() => {
    markdownToHtml(props.currentDocument.content)
      .then((conversionResult) => {
        setMarkdownContent(conversionResult);
      });

  }, []);

  return (
    <Layout catDocuments={props.catDocuments}>
      {Parser(markdownContent)}
    </Layout>
  );
};

export default Post;
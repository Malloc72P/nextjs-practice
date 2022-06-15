import React, {useEffect, useState} from "react";
import {Layout} from "../../components/layout/layout";
import {CatDocument} from "../../lib/cat-document";
import MarkdownContent from "../../components/layout/markdown-content";
import axios from "axios";
import {useRouter} from "next/router";


const Post = () => {
  const router = useRouter();
  const catName = router.query.cats;

  const [content, setContent] = useState<string>("now loading");
  useEffect(() => {
    if(!catName) {
      return;
    }
    console.log(catName);
    // debugger
    axios.get<CatDocument>(`/api/cats/${catName}`)
      .then((response) => {
        setContent(response.data.content);
      }).catch((response) => {
        console.log(response.response.data.content)
        setContent(response.response.data.content);
    });
  }, [catName]);

  return (
    <Layout>
      <MarkdownContent markdownString={content}></MarkdownContent>
    </Layout>
  );
};

export default Post;
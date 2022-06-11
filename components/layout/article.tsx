import {useEffect, useState} from "react";
import {markdownToHtml} from "../../lib/markdown-to-html";
import Parser from 'html-react-parser';
import styles from "../../styles/markdown.module.css";

interface ArticleContent {
  content: string;
}

const Article = (props: ArticleContent) => {
  // 마크다운 컨텐츠
  const [markdownContent, setMarkdownContent] = useState("Now Loading");
  useEffect(() => {
    markdownToHtml(props.content)
      .then((convertedMarkdownContent) => {
        setMarkdownContent(convertedMarkdownContent);
      });
  }, []);

  return (
    <div className={styles.articleMarkDown + " bg-zinc-800 text-white w-full p-6"}>
      {Parser(markdownContent)}
    </div>
  );
};

export {Article};
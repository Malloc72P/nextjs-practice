import Parser from "html-react-parser";
import styles from "../../styles/markdown.module.css";
import {useEffect, useState} from "react";
import {markdownToHtml} from "../../lib/markdown-to-html";
import {useRouter} from "next/router";

export interface MarkdownContentProps {
  markdownString: string;
}

const MarkdownContent = (props: MarkdownContentProps) => {
  const router = useRouter();
  const currentCat = router.query?.catName;
  const [markdownContent, setMarkdownContent] = useState<string>("...loading");
  useEffect(() => {
    markdownToHtml(props.markdownString)
      .then((conversionResult) => {
        setMarkdownContent(conversionResult);
      });

  }, [currentCat]);

  return (
    <div className={styles.articleMarkDown}>
      {Parser(markdownContent)}
    </div>
  );
};

export default MarkdownContent;
import {PropsWithChildren} from "react";
import styles from "../../styles/markdown.module.css";

function Article(props: PropsWithChildren) {
  return (
    <div className={"bg-zinc-800 text-white w-full p-6 overflow-auto " + styles.articleMarkDown}>
      {props.children}
    </div>
  );
}

export {Article};
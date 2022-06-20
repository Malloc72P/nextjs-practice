import React, {useEffect, useState} from "react";
import {Layout} from "../../components/layout/layout";
import MarkdownContent from "../../components/layout/markdown-content";
import axios from "axios";
import {useRouter} from "next/router";
import {CatDocument} from "../../lib/cat-document";

const Edit = () => {
  const [catName, setCatName] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const router = useRouter();
  const catNameParameter = router.query.catName;
  console.log(catNameParameter);

  useEffect(() => {
    if (!catNameParameter || typeof catNameParameter !== "string") {
      return;
    }
    if (content) {
      return;
    }
    setCatName(catNameParameter);
    axios.get<CatDocument>(`/api/cats/${catNameParameter}`)
      .then((response) => {
        setContent(response.data.content);
      }).catch((response) => {
      console.log(response.response.data.content)
      setContent(response.response.data.content);
    });
  }, [catNameParameter]);

  const onClick = () => {
    console.log(content);
    axios.put(`/api/cats/${catName}`, {
      catName: catName,
      content: content
    })
      .then((response) => {
        if (response.status === 200) {
          router.replace(`/cats/${catName}`);
        }
      }).catch((error) => {
      console.error(error);
    });
  }

  return (
    <Layout>
      <div className="w-full h-full flex flex-col">
        <MarkdownContent additionalClass="flex-grow overflow-auto border border-1 rounded-2xl p-3"
                         height="calc(100vh - 75px - 500px - 48px - 12px)"
                         markdownString={content}></MarkdownContent>
        <textarea className="bg-zinc-700 text-white w-full h-[400px] p-3 rounded-2xl mt-5 my-3"
                  onChange={(event) => setContent(event.target.value)} value={content}>
        </textarea>
        <label>고양이 이름: <input className="bg-zinc-700 ml-3"
                              type="text" readOnly
                              onChange={(event) => setCatName(event.target.value)} value={catName}/></label>
        <button className="bg-zinc-700 hover:bg-zinc-500 font-bold py-2 px-4 rounded flex-1 mt-2" onClick={onClick}>
          문서 수정하기
        </button>
      </div>
    </Layout>
  );
};

export default Edit;

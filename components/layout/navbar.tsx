import {NavbarItem} from "./navbar-item";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import axios from "axios";

const Navbar = () => {
  const [catName, setCatName] = useState<string>("");
  const router = useRouter();

  const deleteCatDocument = () => {
    if (confirm("정말로 삭제하시겠어요?")) {
      axios.delete(`/api/cats/${catName}`)
        .then(() => {
          router.push("/");
      }).catch(() => {

      });
    }
  }

  useEffect(() => {
    const catNameQueryParameter = router.query.cats;
    if (catNameQueryParameter && typeof catNameQueryParameter === "string" ) {
      setCatName(catNameQueryParameter);
    }
  }, [router.query.cats]);

  return (
    <div className="flex py-4 px-6
                    bg-zinc-900
                    border-b-2 border-b-zinc-700">
      <h1 className="text-4xl mr-6 text-white">NekoWiki</h1>

      <div className="flex-1"></div>
      <NavbarItem url={"/cats/create"}>create</NavbarItem>
      <NavbarItem url={`/cats/edit?catName=${catName}`}>edit</NavbarItem>
      <NavbarItem callback={deleteCatDocument}>delete</NavbarItem>
    </div>
  );
}

export {Navbar};

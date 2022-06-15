import {Navbar} from "./navbar";
import {Sidebar} from "./sidebar";
import {Article} from "./article";
import {Prisma} from "@prisma/client";
import {CatDocument} from "../../lib/cat-document";
import {PropsWithChildren} from "react";
import {SidebarItemProps} from "./sidebar-item";

const Layout = (props: PropsWithChildren) => {
  return (
    <div className="flex flex-col h-full">
      <Navbar></Navbar>
      <div className="flex flex-grow">
        <Sidebar></Sidebar>
        <Article>{props.children}</Article>
      </div>

    </div>
  );
};

export {Layout};
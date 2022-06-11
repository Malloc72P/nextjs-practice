import {Navbar} from "./navbar";
import {Sidebar} from "./sidebar";
import {Article} from "./article";

interface LayoutProps {
  content: string;
}

const Layout = (props:LayoutProps) => {
  return (
    <div className="flex flex-col h-full">
      <Navbar></Navbar>
      <div className="flex h-full">
        <Sidebar></Sidebar>
        <Article content={props.content}></Article>
      </div>

    </div>
  );
};

export {Layout};
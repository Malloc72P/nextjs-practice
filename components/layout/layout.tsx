import {Navbar} from "./navbar";
import {Sidebar} from "./sidebar";

const Layout = () => {
  return (
    <div className="flex flex-col h-full">
      <Navbar></Navbar>
      <Sidebar></Sidebar>
    </div>
  );
};

export {Layout};
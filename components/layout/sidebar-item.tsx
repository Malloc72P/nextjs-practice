import {PropsWithChildren} from "react";

const SidebarItem = (props:PropsWithChildren) => {
  return (
    <div className="px-5 py-3 text-xl transition-[0.2s] cursor-pointer text-white text-gray-300 hover:bg-gray-700 hover:text-white">
      {props.children}
    </div>
  );
}

export {SidebarItem};
import {PropsWithChildren} from "react";

const SidebarItem = (props: PropsWithChildren) => {
  return (
    <div className="px-5 py-3 text-xl
                    text-white text-gray-300
                    transition-[0.2s] cursor-pointer
                    hover:bg-zinc-700 hover:text-white">
      {props.children}
    </div>
  );
}

export {SidebarItem};
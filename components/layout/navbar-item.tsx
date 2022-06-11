import {PropsWithChildren} from "react";

const NavbarItem = (props: PropsWithChildren) => {
  return (
    <div className="flex items-center px-3
                    text-white opacity-70
                    hover:bg-zinc-700 hover:font-bold hover:opacity-100
                    transition-[0.2s] cursor-pointer">
      {props.children}
    </div>
  );
};

export {NavbarItem};
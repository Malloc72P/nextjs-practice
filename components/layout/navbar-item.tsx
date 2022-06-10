import {PropsWithChildren} from "react";

const NavbarItem = (props:PropsWithChildren) => {
  return (
    <div className="transition-[0.2s] cursor-pointer px-3 flex items-center text-white hover:font-bold">
      {props.children}
    </div>
  );
};

export {NavbarItem};
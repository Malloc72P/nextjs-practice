import {NavbarItem} from "./navbar-item";

const Navbar = () => {
  return (
    <div className="flex py-4 px-6
                    bg-zinc-900
                    border-b-2 border-b-zinc-700">
      <h1 className="text-4xl mr-6 text-white">NekoWiki</h1>

      <div className="flex-1"></div>
      <NavbarItem>create</NavbarItem>
      <NavbarItem>edit</NavbarItem>
      <NavbarItem>delete</NavbarItem>
    </div>
  );
}

export {Navbar};

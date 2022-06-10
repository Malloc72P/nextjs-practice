import {NavbarItem} from "./navbar-item";

const Navbar = () => {
  return (
    <div className="flex p-6 bg-gray-800">
      <h1 className="text-4xl mr-6 text-white">NekoWiki</h1>

      <NavbarItem>Random Neko</NavbarItem>

      <div className="flex-1"></div>
      <NavbarItem>Sign In</NavbarItem>
      <NavbarItem>Sign Up</NavbarItem>
    </div>
  );
}

export {Navbar};

import {SidebarItem} from "./sidebar-item";
import {MenuAlt1Icon} from "@heroicons/react/solid";

const Sidebar = () => {
  return (
    <div className="flex-grow w-[200px] h-full border-r-2 border-r-gray-100 bg-gray-800">
      <div className="flex items-center h-16 flex-shrink-0 px-4 mb-5 bg-gray-900 text-white text-2xl">
        <MenuAlt1Icon className="inline w-6 h-6 mr-4 cursor-pointer"/>
        <span>Nekos</span>
      </div>
      <SidebarItem>스코티시 폴드</SidebarItem>
      <SidebarItem>먼치킨</SidebarItem>
      <SidebarItem>래그돌</SidebarItem>
    </div>
  )
}

export {Sidebar};

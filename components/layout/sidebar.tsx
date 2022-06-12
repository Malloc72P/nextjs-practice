import {SidebarItem, SidebarItemProps} from "./sidebar-item";
import {MenuAlt1Icon} from "@heroicons/react/solid";

interface Cat {
  name: string;
  furType: string;
  sizeType: string;
}

const cats: Cat[] = [
  {
    name: "노르웨이 숲",
    furType: "장모종",
    sizeType: "대형묘",
  },
  {
    name: "먼치킨",
    furType: "장모종",
    sizeType: "대형묘",
  },
  {
    name: "스코티시 폴드",
    furType: "장모종",
    sizeType: "대형묘",
  },
  {
    name: "래그돌",
    furType: "장모종",
    sizeType: "대형묘",
  }
];

interface SidebarProps {
  sidebarItemProps: SidebarItemProps[];
}

const Sidebar = (props: SidebarProps) => {
  return (
    <div className="min-w-[240px] h-full bg-zinc-900">
      <div className="flex items-center flex-shrink-0 px-4 mb-5 h-16
                      text-white text-2xl">
        <MenuAlt1Icon className="inline w-6 h-6 mr-4 cursor-pointer hover:bg-zinc-700"/>
        <span>Nekos</span>
      </div>
      {
        props.sidebarItemProps.map((sidebarItemProp, index) =>
          (<SidebarItem key={index} title={sidebarItemProp.title}></SidebarItem>))
      }
    </div>
  );
}

export {Sidebar};

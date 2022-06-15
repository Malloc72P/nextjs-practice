import {SidebarItem} from "./sidebar-item";
import {MenuAlt1Icon} from "@heroicons/react/solid";
import {useEffect, useState} from "react";
import axios from "axios";
import {GetCatDocumentsDTO} from "../../pages/api/cats";

const Sidebar = () => {
  const [sidebarItems, setSidebarItems] = useState<string[]>([]);
  useEffect(() => {
    axios.get<GetCatDocumentsDTO>("/api/cats")
      .then((response ) => {
        const documents = response.data.documents;
        setSidebarItems(documents);
      });
  }, []);

  return (
    <div className="min-w-[240px] h-full bg-zinc-900">
      <div className="flex items-center flex-shrink-0 px-4 mb-5 h-16
                      text-white text-2xl">
        <MenuAlt1Icon className="inline w-6 h-6 mr-4 cursor-pointer hover:bg-zinc-700"/>
        <span>Nekos</span>
      </div>
      {
        sidebarItems.map((sidebarItem, index) =>
          (<SidebarItem key={index} title={sidebarItem}></SidebarItem>))
      }
    </div>
  );
}

export {Sidebar};

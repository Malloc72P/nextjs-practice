import {createContext} from "react";

interface LayoutProps {
  isSidebarOpened: boolean;
  setIsSidebarOpened: (value: boolean) => void;
}

const LayoutContext = createContext<LayoutProps>({
  isSidebarOpened: true,
  setIsSidebarOpened: (value) => value
});

export {LayoutContext};
export type {LayoutProps}

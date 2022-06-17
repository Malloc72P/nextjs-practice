import {PropsWithChildren} from "react";
import {useRouter} from "next/router";

interface NavbarItemProps extends PropsWithChildren {
  url?: string;
}

function NavbarItem(props: NavbarItemProps) {
  const router = useRouter();
  const onclick = () => {
    if (props.url) {
      router.push(props.url);
    }
  }

  return (
    <div className="flex items-center px-3
                    text-white opacity-70
                    hover:bg-zinc-700 hover:font-bold hover:opacity-100
                    transition-[0.2s] cursor-pointer" onClick={onclick}>
      {props.children}
    </div>
  );
}

export {NavbarItem};

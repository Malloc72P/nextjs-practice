import {useRouter} from "next/router";

export interface SidebarItemProps {
  title: string;
  url?: string;
}

const SidebarItem = (props: SidebarItemProps) => {
  const router = useRouter();
  const onClickHandler = () => {
    router.replace(`/`).then(() => {
      router.push(`/cats/${props.title}`)
    });
  }

  return (
    <div className="px-5 py-3 text-xl
                    text-white text-gray-300
                    transition-[0.2s] cursor-pointer
                    hover:bg-zinc-700 hover:text-white" onClick={onClickHandler}>
      {props.title}
    </div>
  );
}

export {SidebarItem};
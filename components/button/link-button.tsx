import styles from "../../styles/components/link-button.module.css"
import {ReactNode, MouseEventHandler, MouseEvent} from "react";
import {useRouter} from "next/router";

interface LinkButtonProps {
  href?: string;
  children: string | ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement> | undefined
  isHoverSliderEnabled?: boolean
}

const LinkButton = (props: LinkButtonProps) => {
  const router = useRouter();
  const onClick: MouseEventHandler<HTMLAnchorElement> = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (props.onClick) {
      props.onClick(event);
      return;
    }
    if (props.href) {
      router.push(props.href);
    }
  };
  const classNameValue = [styles.linkButton, props.isHoverSliderEnabled ? styles.hoverSlider : ""];

  return (
    <a className={classNameValue.join(" ")}
       href={props.href}
       onClick={onClick}>{props.children}</a>
  );
};

export default LinkButton;
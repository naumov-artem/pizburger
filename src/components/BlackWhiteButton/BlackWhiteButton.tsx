import { ComponentPropsWithoutRef, FunctionComponent } from "react";
import { blackWhiteButtonStyle } from "./BlackWhiteButton.css";

export const BlackWhiteButton: FunctionComponent<
  ComponentPropsWithoutRef<"button">
> = (props) => {
  return (
    <button className={blackWhiteButtonStyle} {...props}>
      {props.children}
    </button>
  );
};

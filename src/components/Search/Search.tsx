import { ComponentPropsWithoutRef, FunctionComponent } from "react";
import { searchStyle } from "./Search.css";

export const Search: FunctionComponent<ComponentPropsWithoutRef<"input">> = (
  props
) => {
  return (
    <input
      className={searchStyle}
      type="search"
      placeholder="поиск"
      {...props}
    />
  );
};

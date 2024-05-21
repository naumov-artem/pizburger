import { style } from "@vanilla-extract/css";

export const productListStyle = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  margin: "20px -5px 0 -5px",
  // "@media": {
  //   "screen and (min-width: 320px)": {},
  // },
});

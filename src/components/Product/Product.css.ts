import { style } from "@vanilla-extract/css";

export const productStyle = style({
  color: "black",
  boxSizing: "border-box",
  margin: "10px 5px",
  paddingBottom: 10,
  border: "1px solid white",
  fontSize: 16,
  borderRadius: 10,
  backgroundColor: "white",
  boxShadow: "0px 2px 15px #cec2c2",
});

export const addButtonStyle = style({
  width: 40,
  height: 40,
  backgroundColor: "black",
  border: "1px solid white",
  color: "white",
  borderRadius: "10px",

  ":active": {
    backgroundColor: "grey",
  },
});

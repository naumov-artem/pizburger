import { style } from "@vanilla-extract/css";

export const blackWhiteButtonStyle = style({
  width: "100%",
  backgroundColor: "black",
  border: "none",
  boxShadow: "1px 1px 9px #575757",
  borderRadius: "5px",
  color: "white",
  position: "sticky",
  padding: 10,
  bottom: 10,
  left: 10,
  fontSize: 20,

  ":active": {
    backgroundColor: "grey",
  },
  ":disabled": {
    background: "gray",
    border: "1px solid darkgray",
    color: "lightgray",
  },
});

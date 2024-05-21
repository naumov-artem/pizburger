import { useRouter } from "next/router";
import { useCallback } from "react";
import { ButtonBackStyle } from "./ButtonBack.css";

export const BackButton = () => {
  const router = useRouter();

  const onClickHandler = useCallback(() => {
    router.push("/");
  }, []);

  return (
    <button type="button" onClick={onClickHandler} className={ButtonBackStyle}>
      {" "}
      {"← назад"}
    </button>
  );
};

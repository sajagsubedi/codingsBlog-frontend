import React from "react";
import { ScrollToTop } from "../styles/CommonStyles";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function ScrollTopBtn() {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <ScrollToTop onClick={scrollTop}>
      <AiOutlineArrowUp />
    </ScrollToTop>
  );
}

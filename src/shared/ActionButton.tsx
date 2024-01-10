import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";
import React from "react";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-amber-500 px-10 py-2 hover:bg-pink-200 hover:text-pink-100"
      onClick={() => setSelectedPage(SelectedPage.AboutUs)}
      href={`#${SelectedPage.AboutUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;

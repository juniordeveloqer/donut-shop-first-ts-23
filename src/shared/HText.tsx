import React from "react";

type Props = {
  children: React.ReactNode;
};

const HText = ({ children }: Props) => {
  return <h1 className="font-montserrat text-8xl  font-bold">{children}</h1>;
};

export default HText;

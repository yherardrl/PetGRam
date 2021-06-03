import React from "react";
import { Anchord, Image } from "./Styles";

const DEFAULT_IMAGE = "https://i.imgur.com/dJa0Hpl.jpg";

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = "?" }) => {
  return (
    <>
      <Anchord href={path}>
        <Image src={cover} alt="" />
        {emoji}
      </Anchord>
    </>
  );
};

import React from "react";
import { GlobalStyles } from "./styles/GlobalStyle";
import { ListOfCategories } from "./components/ListOfCategories";
import { ListOfPhotoCards } from "./container/ListOfPhotoCard";
import { Logo } from "./components/Logo";
import { PhotoCardWithQuery } from "./container/PhotoCardWithQuery";

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");
  console.log(detailId);
  return (
    <>
      <GlobalStyles />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery />
      ) : (
        <>
          <ListOfCategories />
          <ListOfPhotoCards categoryId={1} />
        </>
      )}
    </>
  );
};

export default App;

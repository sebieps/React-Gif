import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

//rafc

const GifExpertApp = () => {
  // const categories = ['Hola 1','juan 2','pepino 3']
  const [categories, setCategories] = useState(["One Punch"]);

  // const handleAdd = () => {
  //     setCategories( ['ssass',...categories] );

  // }

  return (
    <>
      <h2> GifExpertApp </h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      {/* <button onClick={handleAdd}>Agregar</button> */}

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;

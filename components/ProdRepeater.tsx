import react, { useState } from "react";
import AddProd from "./AddProd";

const InputRepeater = ({ products, handleAddProd, index }) => {
  const [prodArray, setProdArray] = useState(products);
  console.log("index: " + index + " products: " + products);

  return (
    <>
      {prodArray.map((prod, index) => {
        return (
          <AddProd product={prod} index={index} handleAddProd={handleAddProd} />
        );
      })}
    </>
  );
};
export default InputRepeater;

// {
//   title:'',
//   body:'',
//   price:'',
//   image:'',
//   link:''
// },

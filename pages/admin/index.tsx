import react, { useState, useEffect } from "react";
import ProdRepeater from "../../components/ProdRepeater";
const Admin = () => {
  const [products, setProducts] = useState([{}]);
  const [numProds, setNumProds] = useState(0);

  useEffect(() => {
    if (numProds >= 0) {
      let newArray = products;
      newArray.push({});
      console.log(newArray);
      setProducts(newArray);
    }
  }, [numProds]);

  const handleAddClick = () => {
    setNumProds(numProds + 1);
  };

  const handleAddProd = (index, title, body, price, img, link) => {
    console.log(
      "index: " +
        index +
        " title: " +
        title +
        " body: " +
        body +
        " price: " +
        price +
        " img: " +
        img +
        " link: " +
        link
    );
  };

  return (
    <>
      <div className="custom-wrapper">
        <form>
          <input placeholder="Pack Title"></input>
          <textarea placeholder="Body"></textarea>
          <div className="images">
            <ProdRepeater
              products={products}
              handleAddProd={handleAddProd}
              index={numProds}
            />
            <div onClick={handleAddClick}>+</div>
          </div>
          <input placeholder="category"></input>
          <input placeholder="tags (separate with space)"></input>
          <input placeholder="meta title"></input>
          <input placeholder="meta description"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
      <style jsx>{`
        * {
          box-sizing: border-box;
        }
        form {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 90%;
          left: 0;
          right: 0;
          margin: auto;
        }
        input,
        textarea,
        images input {
          width: 100%;
          margin: 15px;
          height: 50px;
        }
        .images {
          border: 2px solid rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          padding: 15px;
          margin: 15px auto;
        }
        .images button {
          display: flex;
          align-self: flex-end;
          width: 100px;
          justify-content: center;
        }
      `}</style>
    </>
  );
};
export default Admin;

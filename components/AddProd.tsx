import react, { useState } from "react";

const AddProd = ({ product, index, handleAddProd }) => {
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);
  const [price, setPrice] = useState(null);
  const [img, setImg] = useState(null);
  const [link, setLink] = useState(null);

  const addToPack = () => {
    console.log(index);
    console.log(title);
    handleAddProd(index, title, body, price, img, link);
  };

  const handleImage = imgPath => {
    imgPath = imgPath.replace("C:\\fakepath\\", "");
    setImg("./" + imgPath);
  };

  console.log(img);

  return (
    <>
      <form action="/api/admin" method="post" encType="multipart/form-data">
        <input
          onKeyUp={e => setTitle(e.currentTarget.value)}
          type="text"
          placeholder="Product Title"
        />
        <textarea
          onKeyUp={e => setBody(e.currentTarget.value)}
          placeholder="product body"
        />
        <input
          onKeyUp={e => setPrice(e.currentTarget.value)}
          type="number"
          placeholder="price"
        />
        <input
          onChange={e => handleImage(e.currentTarget.value)}
          type="file"
          name="uploaded_img"
          placeholder="Upload File"
        />
        <input
          onKeyUp={e => setLink(e.currentTarget.value)}
          type="text"
          placeholder="amazon link"
        />
        <input type="submit" className="btn" onClick={addToPack}>
          Submit
        </input>
      </form>
    </>
  );
};
export default AddProd;

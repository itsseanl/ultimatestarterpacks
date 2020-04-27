import react, { useState } from "react";
import fetch from "isomorphic-unfetch";

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

	const handleImage = async (theImg) => {
		// imgPath = imgPath.replace("C:\\fakepath\\", "");

		var reader = new FileReader();
		var dataURL;
		reader.onload = async function (e) {
			dataURL = reader.result;
			try {
				const res = await fetch("/api/admin", {
					method: "POST",
					body: dataURL,
				});
				const json = await res.json();
				setImg(json.response);
			} catch (error) {
				console.log(error);
			}
		};

		reader.readAsDataURL(theImg);
	};

	console.log(img);

	return (
		<>
			<input
				onKeyUp={(e) => setTitle(e.currentTarget.value)}
				type="text"
				placeholder="Product Title"
			/>
			<textarea
				onKeyUp={(e) => setBody(e.currentTarget.value)}
				placeholder="product body"
			/>
			<input
				onKeyUp={(e) => setPrice(e.currentTarget.value)}
				type="number"
				placeholder="price"
			/>
			<input
				onChange={(e) => handleImage(e.target.files[0])}
				type="file"
				name="uploaded_img"
				placeholder="Upload File"
			/>
			<input
				onKeyUp={(e) => setLink(e.currentTarget.value)}
				type="text"
				placeholder="amazon link"
			/>
			<input type="submit" className="btn" onClick={addToPack} />
		</>
	);
};
export default AddProd;

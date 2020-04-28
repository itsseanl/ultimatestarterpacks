import react, { useState } from "react";
import fetch from "isomorphic-unfetch";

const AddProd = ({ product, index, handleAddProd }) => {
	const [title, setTitle] = useState(null);
	const [body, setBody] = useState(null);
	const [price, setPrice] = useState(null);
	const [img, setImg] = useState(null);
	const [link, setLink] = useState(null);

	//call parent function to add product to pack data
	const addToPack = (e) => {
		e.preventDefault();
		console.log(index);
		console.log(title);
		handleAddProd(index, title, body, price, img, link);
	};

	//get image file and upload
	const handleImage = async (theImg) => {
		var reader = new FileReader();
		var dataURL;
		reader.onload = async function (e) {
			dataURL = reader.result;
			setImg(dataURL);
		};
		reader.readAsDataURL(theImg);
	};

	return (
		<>
			<h2>Products</h2>
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
			<div className="image">
				<img src={img} />

				<input
					onChange={(e) => handleImage(e.target.files[0])}
					type="file"
					name="uploaded_img"
					placeholder="Upload File"
					id={`image${index}`}
				/>
				<label htmlFor={`image${index}`}>Upload Image</label>
			</div>
			<input
				onKeyUp={(e) => setLink(e.currentTarget.value)}
				type="text"
				placeholder="amazon link"
			/>
			<input type="submit" className="btn" onClick={addToPack} />
			<style jsx>{`
				img {
					height: 100px;
					width: 100px;
					object-fit: cover;
				}
				input,
				textarea {
					width: 100%;
					height: 50px;
					margin: 15px auto;
				}
				input,
				textarea,
				.images input {
					width: 90%;
					margin: 15px;
					height: 50px;
					background: #ebebeb;
					outline: none;
					border: none;
					font-size: 18px;
					padding: 5px;
				}
				.img {
					display: flex;
					justify-content: center;
					align-items: center;
				}
				.img input {
					width: 70%;
				}
				input[type="file"] {
					opacity: 0;
					position: absolute;
					pointer-events: none;
					// alternative to pointer-events, compatible with all browsers, just make it impossible to find
					width: 1px;
					height: 1px;
				}
				input[type="file"] + label {
					// your styles here
					background: #25aae1;
					color: #fff;
					height: 50px;
					display: flex;
					justify-content: center;
					align-items: center;
					padding: 5px;
					font-family: "libre", sans-serif;
					float: right;
				}
				input[type="submit"] {
					background: #2faae1;
					color: #fff;
				}
				.image {
					display: flex;
					align-items: center;
					justify-content: space-between;
					width: 90%;
				}
				.image img {
					box-shadow: 0px 7px 8px 2px rgba(0, 0, 0, 0.1);
					width: 100px;
					height: 100px;
				}
			`}</style>
		</>
	);
};
export default AddProd;

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

			// try {
			// 	const res = await fetch("/api/admin", {
			// 		method: "POST",
			// 		body: dataURL,
			// 	})
			// 		.then((res) => res.blob())
			// 		.then((image) => {
			// 			var reader2 = new FileReader();
			// 			var asText;
			// 			reader2.onload = async function (e) {
			// 				asText = reader2.result;
			// 				console.log(asText);

			// 				//.replace("data:image/jpeg;base64,", "");
			// 				setImgLink(asText);
			// 			};
			// 			reader2.readAsDataURL(image);
			// 			// outside = URL.createObjectURL(image);
			// 		});
			// } catch (error) {
			// 	console.log(error);
			// }
		};

		reader.readAsDataURL(theImg);
	};

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
			<div className="img">
				<input
					onChange={(e) => handleImage(e.target.files[0])}
					type="file"
					name="uploaded_img"
					placeholder="Upload File"
				/>
				<img src={img} />
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
				.img {
					display: flex;
					justify-content: center;
					align-items: center;
				}
				.img input {
					width: 70%;
				}
			`}</style>
		</>
	);
};
export default AddProd;

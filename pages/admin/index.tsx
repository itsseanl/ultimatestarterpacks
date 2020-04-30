import react, { useState, useEffect, useRef } from "react";
import ProdRepeater from "../../components/ProdRepeater";
import Header from "../../components/Header";
const Admin = () => {
	const [products, setProducts] = useState([{}]);
	const [numProds, setNumProds] = useState(0);
	const [packTitle, setPackTitle] = useState("test");
	const [packBody, setPackBody] = useState("test");
	const [packCat, setPackCat] = useState("test");
	const [packTags, setPackTags] = useState("test");
	const [metaTitle, setMetaTitle] = useState("test");
	const [metaDescription, setMetaDescription] = useState("test");

	const [img, setImg] = useState(null);
	const passVal = useRef(null);

	const [checked, setChecked] = useState(true);

	const handleAuth = async (e) => {
		e.preventDefault();

		const data = passVal.current.value;
		console.log(data);
		const res = await fetch("/api/admin/validate", {
			method: "POST",
			body: data,
		});
		const json = await res.json();
		console.log(json.response);
		setChecked(json.response);
	};

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
				" link: " +
				link
		);
		let newProds = products;
		newProds[index] = {
			title: title,
			body: body,
			price: price,
			image: img,
			link: link,
		};
		setProducts(newProds);
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

	const handleSubmitPack = async (e) => {
		e.preventDefault();
		const sendData = {
			title: packTitle,
			body: packBody,
			image: img,
			products: products,
			category: packCat,
			tags: packTags,
			metaTitle: metaTitle,
			metaDescription: metaDescription,
			date: Date.now(),
			likes: 0,
		};
		try {
			const res = await fetch("/api/admin", {
				method: "POST",
				body: JSON.stringify(sendData),
			});
			console.log(res.json);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<Header metaDescription={""} metaTitle={"admin"} />
			{checked ? (
				<div className="custom-wrapper">
					<div className="form">
						<h2>Add New Pack</h2>
						<input
							onKeyUp={(e) => setPackTitle(e.currentTarget.value)}
							placeholder="Pack Title"
						></input>
						<textarea
							onKeyUp={(e) => setPackBody(e.currentTarget.value)}
							placeholder="Body"
						></textarea>
						<div className="image">
							<img src={img} />

							<input
								onChange={(e) => handleImage(e.target.files[0])}
								type="file"
								name="uploaded_img"
								placeholder="Upload File"
								id="Image"
							/>
							<label htmlFor={"Image"}>Upload Image</label>
						</div>
						<div className="prods">
							<ProdRepeater
								products={products}
								handleAddProd={handleAddProd}
								index={numProds}
							/>
							<div className="addProd" onClick={handleAddClick}>
								+
							</div>
						</div>
						<input
							onKeyUp={(e) => setPackCat(e.currentTarget.value)}
							placeholder="category"
						></input>
						<input
							onKeyUp={(e) => setPackTags(e.currentTarget.value)}
							placeholder="tags (separate with space)"
						></input>
						<input
							onKeyUp={(e) => setMetaTitle(e.currentTarget.value)}
							placeholder="meta title"
						></input>
						<input
							onKeyUp={(e) => setMetaDescription(e.currentTarget.value)}
							placeholder="meta description"
						></input>
						<input className="btn" type="submit" onClick={handleSubmitPack} />
					</div>
				</div>
			) : (
				<>
					<input ref={passVal} type="password" placeholder="enter password" />
					<input type="submit" onClick={handleAuth} />
				</>
			)}

			<style jsx>{`
				* {
					box-sizing: border-box;
				}
				.form {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					width: 90%;
					left: 0;
					right: 0;
					margin: auto;
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
				.addProd {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 90%;
					color: #fff;
					background: green;
					padding: 5px;
					height: 50px;
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
				input {
					background: #ebebeb;
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
				.prods {
					border: 2px solid rgba(0, 0, 0, 0.3);
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					width: 90%;
					padding: 15px;
					margin: 15px auto;
				}
				.prods button {
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

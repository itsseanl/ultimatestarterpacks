import react, { useState, useEffect } from "react";
import ProdRepeater from "../../components/ProdRepeater";
const Admin = () => {
	const [products, setProducts] = useState([{}]);
	const [numProds, setNumProds] = useState(0);
	const [packTitle, setPackTitle] = useState("test");
	const [packBody, setPackBody] = useState("test");
	const [packCat, setPackCat] = useState("test");
	const [packTags, setPackTags] = useState("test");
	const [metaTitle, setMetaTitle] = useState("test");
	const [metaDescription, setMetaDescription] = useState("test");
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

	const handleSubmitPack = async (e) => {
		e.preventDefault();
		const sendData = {
			title: packTitle,
			body: packBody,
			products: products,
			category: packCat,
			tags: packTags,
			metaTitle: metaTitle,
			metaDescription: metaDescription,
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
			<div className="custom-wrapper">
				<input
					onKeyUp={(e) => setPackTitle(e.currentTarget.value)}
					placeholder="Pack Title"
				></input>
				<textarea
					onKeyUp={(e) => setPackBody(e.currentTarget.value)}
					placeholder="Body"
				></textarea>

				<div className="images">
					<ProdRepeater
						products={products}
						handleAddProd={handleAddProd}
						index={numProds}
					/>
					<div onClick={handleAddClick}>+</div>
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

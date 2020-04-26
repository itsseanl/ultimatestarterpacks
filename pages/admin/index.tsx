import react, { useState, useEffect } from "react";
import InputRepeater from "../../components/InputRepeater";
const Admin = () => {
	const [images, setImages] = useState([1, 2, 3]);
	const [imgLength, setImgLength] = useState(3);
	const likes = 0;

	useEffect(() => {
		let newArray = images;
		newArray.push(newArray.length + 1);
		console.log(newArray);
		setImages(newArray);
	}, [imgLength]);
	const handleAddClick = () => {
		setImgLength(imgLength + 1);
	};

	return (
		<>
			<div className="custom-wrapper">
				<form>
					<input placeholder="Pack Title"></input>
					<textarea placeholder="Body"></textarea>
					<div className="images">
						<InputRepeater images={images} />
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

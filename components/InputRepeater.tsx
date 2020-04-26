import react, { useState } from "react";

const InputRepeater = ({ images }) => {
	const [imgArray, setImgArray] = useState(images);
	console.log(images);

	return (
		<>
			{imgArray.map((map, index) => {
				return <input key={map + index} placeholder="enter image url"></input>;
			})}
		</>
	);
};
export default InputRepeater;

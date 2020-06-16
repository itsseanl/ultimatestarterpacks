import react, { useState, useEffect } from "react";

const Slider = ({ images }) => {
	const [slide, setSlide] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setSlide(slide + 1);
		}, 3000);
		if (slide > images.length - 1) {
			setSlide(0);
		}
		return () => clearInterval(interval);
	}, [slide]);

	function updateImages() {}

	return (
		<>
			<div className="slider">
				{images.map((image) => {
					return <img className="slide" src={image.img} alt={image.meta} />;
				})}
			</div>
			<style jsx>{`
				.slider {
					max-height: 50vh;
					width: ${images.length}00vw;
					display: flex;
					flex-wrap: nowrap;
					transform: translateX(-${slide}00vw);
					transition: 0.3s all;
				}
				.slide {
					height: auto;
					width: 100vw;
					object-fit: cover;
				}
			`}</style>
		</>
	);
};

export default Slider;

import react, { useState, useEffect, useRef } from "react";
import { IconContext } from "react-icons/lib";
import { FaHeart } from "react-icons/fa";

const Packs = ({ data }) => {
	const [shown, setShown] = useState(data);
	const [search, setSearch] = useState(null);

	const allSearch = useRef(null);
	const lifestyleSearch = useRef(null);
	const activitySearch = useRef(null);
	const cookingSearch = useRef(null);
	const noveltySearch = useRef(null);

	useEffect(() => {
		if (search == null || search == "") {
			setShown(data);
		} else {
			let splitSearch = search.split(" ");
			let newShown = [];
			shown.map((pack) => {
				let objectToStr = `${pack.title} ${pack.category} ${pack.body}`;
				objectToStr.toLowerCase;
				for (let i = 0; i < splitSearch.length; i++) {
					if (objectToStr.includes(splitSearch[i])) {
						newShown.push(pack);
						return;
					}
				}
			});
			setShown(newShown);
		}
	}, [search]);

	const handleKeyDown = (e) => {
		setSearch(e.target.value);
		if (e.keyCode == "13") {
			console.log("Search");
		}
	};
	const handleCatClick = (elem, e) => {
		elem.current.classList.add("selected");
	};

	console.log(search);
	return (
		<>
			<div className="custom-wrapper search">
				<input onKeyUp={(e) => handleKeyDown(e)} placeholder="Search" />
			</div>
			<div className="custom-wrapper categories">
				<ul>
					<li
						onClick={(e) => handleCatClick}
						className="selected"
						ref={allSearch}
					>
						All
					</li>
					<li onClick={(e) => handleCatClick(this, e)} ref={lifestyleSearch}>
						Lifestyle
					</li>
					<li onClick={(e) => handleCatClick(this, e)} ref={activitySearch}>
						Activities
					</li>
					<li onClick={(e) => handleCatClick(this, e)} ref={cookingSearch}>
						Cooking
					</li>
					<li onClick={(e) => handleCatClick(this, e)} ref={noveltySearch}>
						Novelty
					</li>
				</ul>
			</div>
			<div className="custom-wrapper packs">
				{shown.map((pack) => {
					return (
						<div className="pack" data-cat={pack.category}>
							<img src={"." + pack.images[0]} />
							<div className="info">
								<div className="title">
									<div className="left">
										<h2>{pack.title}</h2>
									</div>
									<div className="right">
										<p>{pack.likes}</p>
										<FaHeart />
									</div>
								</div>
								<a href={"/pack/" + pack.title}>View</a>
								<a href="">Add to Amazon Cart</a>
							</div>
						</div>
					);
				})}
			</div>
			<style jsx>{`
				.title {
					width: 100%;
					display: flex;
					justify-content: space-between;
				}
				.left {
					display: flex;
					justify-content: flex-start;
				}
				.right {
					display: flex;
					justify-content: flex-end;
					align-items: center;
				}
				.right :global(svg) {
					font-size: 18px;
					margin-left: 15px;
				}
				input {
					display: block;
					left: 0;
					right: 0;
					margin: 15px auto;
					border-radius: 25px;
					border: 1px solid #d8d8d8;
					background-color: #ebebeb;
					box-shadow: 0 2px 8px 1px rgba(0, 0, 0, 0.1);
					width: 50%;
					max-width: 500px;
					height: 50px;
					font-size: 18px;
					text-align: center;
					outline: none;
					transition: 0.3s all;
				}
				input:focus {
					border: 3px solid #d8d8d8;
				}
				ul {
					list-style: none;
					padding-left: 0;
					display: flex;
					justify-content: center;
					flex-wrap: wrap;
				}
				li {
					cursor: pointer;
					margin: 15px;
					transition: 0.3s all;
				}
				.selected,
				li:hover {
					color: #25aae1;
					font-weight: 700;
				}
				.packs {
					display: grid;
				}
				.pack {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					margin: 30px auto;
					padding: 30px 10px;
					box-shadow: 0 2px 8px 2px rgba(0, 0, 0, 0.3);
					border-radius: 25px;
					max-width: 400px;
					width: 90%;
					transition: 0.3s all;
				}
				.pack img {
					width: 90%;
					height: auto;
				}
				.info a {
					text-decoration: none;
					padding: 5px;
					background-color: #25aae1;
					color: #fff;
					font-size: 18px;
					width: 100%;
					text-align: center;
					border: 2px solid #d0d0d0;
					margin: 5px auto;
					text-transform: uppercase;
				}
				.info a:last-of-type {
					background-color: #d8d8d8;
					color: #000;
				}
				.info {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					width: 90%;
					margin-top: 5px;
				}
				@media (max-width: 767px) {
				}
				@media (min-width: 768px) {
					.packs {
						grid-template-columns: 50% 50%;
					}
				}
				@media (min-width: 900px) {
					.packs {
						grid-template-columns: 33.3% 33.3% 33.3%;
					}
				}
			`}</style>
		</>
	);
};

export default Packs;

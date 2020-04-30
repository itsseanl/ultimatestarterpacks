import react, { useState, useEffect, useRef, createRef } from "react";
import { IconContext } from "react-icons/lib";
import { FaHeart } from "react-icons/fa";
import React from "react";
import { readFileSync } from "fs";

import Pack from "./Pack";

const Packs = ({ data }) => {
	const [shown, setShown] = useState(data);
	const [search, setSearch] = useState(null);

	const allSearch = useRef(null);
	const lifestyleSearch = useRef(null);
	const activitySearch = useRef(null);
	const cookingSearch = useRef(null);
	const noveltySearch = useRef(null);
	// useEffect(() => {
	// 	console.log(shown);
	// }, [setSearch]);

	useEffect(() => {
		if (search == null || search == "") {
			setShown(data);
		} else {
			let splitSearch = search.split(" ");
			let newShown = [];
			shown.map((pack, i) => {
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
	};

	const handleCatClick = (elem, e) => {
		allSearch.current.classList.remove("selected");
		lifestyleSearch.current.classList.remove("selected");
		activitySearch.current.classList.remove("selected");
		cookingSearch.current.classList.remove("selected");
		noveltySearch.current.classList.remove("selected");

		elem.current.classList.add("selected");
		if (elem.current.innerHTML == "All") {
			setSearch("");
		} else {
			setSearch(elem.current.innerHTML);
		}
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
						onClick={(e) => handleCatClick(allSearch, e)}
						className="selected"
						ref={allSearch}
					>
						All
					</li>
					<li
						onClick={(e) => handleCatClick(lifestyleSearch, e)}
						ref={lifestyleSearch}
					>
						lifestyle
					</li>
					<li
						onClick={(e) => handleCatClick(activitySearch, e)}
						ref={activitySearch}
					>
						Activities
					</li>
					<li
						onClick={(e) => handleCatClick(cookingSearch, e)}
						ref={cookingSearch}
					>
						Cooking
					</li>
					<li
						onClick={(e) => handleCatClick(noveltySearch, e)}
						ref={noveltySearch}
					>
						Novelty
					</li>
				</ul>
			</div>
			<div className="custom-wrapper packs">
				{shown.map((pack, index) => {
					return <Pack key={pack.title + index} data={pack} />;
				})}
			</div>
			<style jsx>{`
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

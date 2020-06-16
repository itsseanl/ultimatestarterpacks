import react, { useState, useEffect } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

import Packs from "../components/Packs";
import Header from "../components/Header";
import Slider from "../components/Slider";

const Home = ({ data }) => {
	const metaTitle = "Find your Passion | Home | ultimatestarterpacks.com";
	const metaDescription = "this is the meta description.";
	const images = [
		{
			img: "/coffee.jpg",
			meta: "person pouring coffee from caraffe",
		},
		{
			img: "/dev.jpg",
			meta: "developer with laptop, book and phone",
		},
		{
			img: "/art.jpg",
			meta: "paintbrush and other art supplies on canvas",
		},
		{
			img: "/exercise.jpg",
			meta: "exercise gloves and equipment",
		},
	];
	return (
		<>
			<div className="main">
				<Header metaTitle={metaTitle} metaDescription={metaDescription} />
				<Slider images={images} />
				<Packs data={data} />
			</div>
			<style jsx>{`
				.main {
					width: 100vw;
				}
			`}</style>
		</>
	);
};
Home.getInitialProps = async () => {
	const baseurl =
		process.env.NODE_ENV === "development"
			? "http://localhost:3000"
			: "https://ultimatestarterpacks.itsseanl.now.sh";

	const res = await fetch(baseurl + "/api/mongodb");
	const json = await res.json();
	return { data: json };
};

export default Home;

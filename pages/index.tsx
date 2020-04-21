import react, { useState, useEffect } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

import Packs from "../components/Packs";
import Header from "../components/Header";
import Slider from "../components/Slider";

const Home = ({ data }) => {
	return (
		<>
			<div className="main">
				<Header />
				<Slider />
				<Packs data={data} />
				<p>hello!</p>
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

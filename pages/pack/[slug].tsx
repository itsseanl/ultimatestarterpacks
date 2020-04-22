import { useRouter, Router } from "next/router";
import fetch from "isomorphic-unfetch";
const Pack = ({ data }) => {
	const router = useRouter();
	const { pid } = router.query;
	console.log(data);
	return <p>Post: {pid}</p>;
};
Pack.getInitialProps = async ({ query }) => {
	console.log("id: " + query.slug);
	const baseurl =
		process.env.NODE_ENV === "development"
			? "http://localhost:3000"
			: "https://ultimatestarterpacks.com";

	const res = await fetch(baseurl + "/api/pack/" + query.slug);
	const json = await res.json();
	return { data: json };
};
export default Pack;

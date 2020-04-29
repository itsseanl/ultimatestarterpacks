import { useRouter, Router } from "next/router";
import fetch from "isomorphic-unfetch";

import Header from "../../components/Header";

const Pack = ({ data }) => {
	const router = useRouter();
	const { pid } = router.query;
	console.log(data);
	return (
		<>
			<Header
				metaTitle={data.metaTitle}
				metaDescription={data.metaDescription}
			/>
			<p>Post: {pid}</p>
			{data.products.map(() => {})}
		</>
	);
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

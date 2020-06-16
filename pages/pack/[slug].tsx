import react, { useRef, useState } from "react";
import { FaHeart, FaProductHunt } from "react-icons/fa";
import { useRouter, Router } from "next/router";
import fetch from "isomorphic-unfetch";
import Header from "../../components/Header";

const Pack = ({ data }) => {
	const likeCount = useRef(null);
	const heart = useRef(null);

	const handleLike = async (title, likes) => {
		const data = { title: title, likes: likes };
		try {
			const res = await fetch("/api/like", {
				method: "POST",
				body: JSON.stringify(data),
				headers: {
					"content-type": "application/json",
				},
			});

			const json = await res.json();
			console.log(json);
			likeCount.current.innerHTML = parseInt(data.likes) + 1;
			heart.current.style.color = "red!important";
		} catch (error) {
			console.log(error);
		}
	};
	console.log(data);

	// var date = new Date(sec * 1000);
	// var timestr = date.toLocaleTimeString();
	return (
		<>
			<Header
				metaTitle={data[0].metaTitle}
				metaDescription={data[0].metaDescription}
			/>
			<div className="post">
				<div className="posthead">
					<h2>{data[0].title}</h2>

					<img src={data[0].image} />
					{/* <p>Posted: {data[0].date.toLocaleTimeString()} </p> */}
				</div>
				<div className="postmeta">
					<div className="custom-wrapper">
						<p>
							<span className="bold">Category:</span> {data[0].category}
						</p>
						<p>
							<span className="bold">Tags:</span> {data[0].tags}
						</p>
						<p className="theLikes">
							<span ref={likeCount}> {data[0].likes} </span>

							<span
								className="likes"
								ref={heart}
								onClick={(e) => handleLike(data[0].title, data[0].likes)}
							>
								<FaHeart />
							</span>
						</p>
					</div>
				</div>

				<div className="postbody custom-wrapper">
					<p>{data[0].body}</p>
				</div>
				{data[0].products.map((product) => {
					if (product.title != null) {
						return (
							<div className="product">
								<div className="left">
									<img src={product.image} />
									<span className="spaninfo">
										<div className="info">
											<h3>{product.title}</h3> |<p>${product.price}</p>
										</div>
										<div className="button">
											<a href={product.link} className="btn">
												View Product
											</a>
										</div>
									</span>
								</div>
								<div className="right custom-wrapper">
									<p dangerouslySetInnerHTML={{ __html: product.body }} />
								</div>
							</div>
						);
					}
				})}
			</div>
			<style jsx>{`
				:global(svg) {
					margin: 15px;
				}
				* {
					font-family: "libre", sans-serif;
				}
				.posthead {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					width: 100%;
				}

				.bold {
					font-family: "libreBold";
				}
				.posthead img {
					object-fit: cover;
					width: 100%;
					height: auto;
					max-height: 200px;
				}
				.posthead h2 {
					position: absolute;
					width: 100%;
					height: 200px;
					background: rgba(37, 170, 225, 0.8);
					color: #fff;
					left: 0;
					right: 0;
					display: block;
					text-align: Center;
					display: flex;
					justify-content: center;
					align-items: center;
					margin: 0;
				}
				.theLikes {
					display: flex;
					justify-content: center;
					align-items: center;
				}
				.postmeta {
					display: flex;
					background: #ebebeb;
					width: 100%;
				}
				.postmeta > .custom-wrapper {
					display: flex;
					align-items: center;
					justify-content: center;
				}
				.postmeta > .custom-wrapper > h2 {
				}
				.postmeta > .custom-wrapper > p {
					font-size: 10px;
					color: #d0d0d0;
				}
				p > .bold {
					font-size: 16px;
					font-family: "libreBold";
					color: #333;
				}
				.postmeta > .custom-wrapper > * {
					margin: 15px;
				}
				.likes :global(svg) {
					font-size: 24px;
				}
				.left {
					display: flex;
					flex-wrap: wrap;
				}
				.left img {
					width: 90%;
					margin: 5px auto;
				}
				.spaninfo {
					display: flex;
					justify-content: flex-start;
					align-items: center;
					background: #ebebeb;
					width: 100%;
					padding: 0px 15px;
					max-height: 90px;
				}
				.spaninfo > .info > * {
					padding: 15px;
				}
				.info {
					width: 50%;
					display: flex;
					justify-content: flex-start;
					align-items: center;
				}
				.button {
					display: flex;
					justify-content: flex-end;
					align-items: center;
					width: 50%;
				}
				.btn {
					background: #25aae1;
					text-decoration: none;
					color: #fff;
					box-shadow: 0px 1px 4px 2px rgba(0, 0, 0, 0.1);
					padding: 15px;
				}
				.postbody > p {
					text-align: Center;
					line-height: 24px;
					font-size: 18px;
					font-family: "ubuntu", sans-serif;
					margin: 50px auto;
				}
				.postbody,
				.right {
					display: flex;
					justify-content: center;
					align-items: Center;
					flex-direction: Column;
				}
				@media (min-width: 768px) {
					.product {
						display: flex;
						width: 100%;
						max-width: 1200px;
						left: 0;
						right: 0;
						margin: auto;
						height: 500px;
						line-height: 24px;
						border-bottom: 5px solid #ebebeb;
						overflow: hidden;
					}

					.product:nth-child(odd) {
						flex-direction: row-reverse;
					}
					.left {
						flex: 1 1 auto;
						align-items: flex-end;
					}
					.left img {
						max-height: 400px;
					}
					.right {
						justify-content: flex-start;
						align-items: flex-start;
						text-align: left;
						padding: 50px;
						font-family: "Open Sans", sans-serif;
					}
				}
			`}</style>
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

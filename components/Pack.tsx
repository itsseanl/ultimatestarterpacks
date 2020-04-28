import react, { useState, useRef } from "react";
import { FaHeart } from "react-icons/fa";

const Pack = ({ data }) => {
	const [pack, setPack] = useState(data);
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
			likeCount.current.innerHTML = parseInt(pack.likes) + 1;
			heart.current.style.color = "red!important";
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<div className="pack" data-cat={pack.category}>
				{pack.images ? <img src={"." + pack.images[0]} /> : null}
				<div className="info">
					<div className="title">
						<div className="left">
							<h2>{pack.title}</h2>
						</div>
						<div className="right">
							{/* <p ref={likeRefs[index]}>{pack.likes}</p> */}
							<p ref={likeCount}>{pack.likes}</p>

							<div
								className="likes"
								ref={heart}
								// ref={heartRefs[index]}
								onClick={(e) => handleLike(pack.title, pack.likes)}
							>
								<FaHeart />
							</div>
						</div>
					</div>
					<a href={"/pack/" + pack.title}>View</a>
					<a href="">Add to Amazon Cart</a>
				</div>
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
					transition: 0.3s all;
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
			`}</style>
		</>
	);
};
export default Pack;

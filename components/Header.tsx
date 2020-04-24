import react, { useState, useEffect } from "react";
import { IconContext } from "react-icons/lib";

import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import Head from "next/head";
// import Head from "next/head";

const Header = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header>
        <div className="top">
          <FaInstagram />
          <img src="/usplogo.png" />
          <FaFacebookSquare />
        </div>
        <div className="bottom">
          <p>We research the top recommended products so you don't have to!</p>
        </div>
      </header>

      <style jsx>{`
        :global(html, body) {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
        :global(*) {
          box-sizing: border-box;
          font-family: "libre";
        }
        :global(.custom-wrapper) {
          width: 90%;
          max-width: 1300px;
          left: 0;
          right: 0;
          margin: auto;
        }
        :global(@font-face) {
          font-family: "libre";
          src: url(./fonts/Libre_Baskerville/LibreBaskerville-Bold.ttf);
          src: url(./fonts/Libre_Baskerville/LibreBaskerville-Italic.ttf);
          src: url(./fonts/Libre_Baskerville/LibreBaskerville-Regular.ttf);
        }
        :global(h1, h2, h3, h4, h5, h6) {
          font-family: "libre", sans-serif;
          font-weight: 700;
        }
        header {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #fff;
          box-shadow: 0 0 8px 7px rgba(0, 0, 0, 0.3);
        }
        .top {
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 0 8px 7px rgba(0, 0, 0, 0.3);
          width: 100%;
        }
        .bottom {
          background-color: #d8d8d8;
          width: 100%;
          padding: 15px;
          text-align: center;
        }
        img {
          max-height: 100px;
          width: auto;
          margin: 15px 5px;
        }
        :global(svg) {
          font-size: 48px;
          color: #25aae1;
        }
      `}</style>
    </>
  );
};
export default Header;

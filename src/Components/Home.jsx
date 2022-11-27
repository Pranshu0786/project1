import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillYoutube,
  AiFillInstagram,
  AiFillAmazonCircle,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution For Every Problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who We Are?</h1>
          <p>
            Technology solution company TechStars is gaining popularity for its
            innovative and effective solutions. The company has a team of
            experienced professionals who are well-versed in the latest
            technologies and trends. This makes them capable of providing
            customized solutions that meet the specific needs of their clients.
            TechStars has been able to create a niche for itself in the market
            by providing quality services at competitive rates. The company has
            a strong client base and is constantly expanding its operations.
            This is a testimony to the fact that TechStars is a reliable and
            trustworthy partner for all your technology needs.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;

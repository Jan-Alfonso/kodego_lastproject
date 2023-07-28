import React from "react";
import cglogo from "../assets/cglogo.png";

export default function AboutUsContent() {
  return (
    <div>
      <div
        style={{
          margin: "5%",
          color: "white",
        }}
      >
        <div className="d-flex justify-content-center">
          <img className="cglogo" src={cglogo} alt="ClearGames PH Logo" />
        </div>

        <h2 className="textTitles text-center  m-5">
          About Us - ClearGames PH
        </h2>
        <p className="text-center">
          Welcome to ClearGames PH, your trusted companion for navigating the
          gaming world with clarity and confidence in the Philippines!
        </p>
        <p className="text-center">
          At ClearGames PH, we believe that gaming should be an enjoyable and
          transparent experience for all, especially for newbie gamers taking
          their first steps into this exciting realm. Our mission is to provide
          you with a clear and straightforward platform that empowers you to
          make informed decisions about the games you play.
        </p>

        <h3 className="textTitles text-center  m-5">
          Why Choose ClearGames PH?
        </h3>
        <ol className="text-center">
          <li>
            Clarity in Game Selection: Our team of passionate gamers
            meticulously handpicks games tailored for newcomers. We consider
            factors like gameplay mechanics, accessibility, and community
            feedback, ensuring that every game recommendation aligns with your
            gaming interests.
          </li>
          <li>
            Simplified Game Discovery: Navigating through our platform is
            effortless. Our intuitive interface allows you to browse through
            various game genres, explore trending titles, and discover hidden
            gems, streamlining your search for the perfect gaming experience.
          </li>
          <li>
            Guides and Tips for Newbies: We understand the challenges faced by
            new gamers, which is why we offer comprehensive guides and helpful
            tips to enhance your gaming skills. From beginner-friendly tutorials
            to advanced strategies, we're here to support your growth as a
            gamer.
          </li>
          <li>
            Community-Driven Support: Join our vibrant gaming community, where
            you can connect with fellow gamers, share experiences, and seek
            advice. Embrace a supportive network that fosters learning,
            camaraderie, and a passion for gaming.
          </li>
          <li>
            Transparency and Trust: ClearGames PH values transparency. We take
            pride in providing honest reviews and genuine insights about the
            games we recommend, ensuring that you can trust our platform to make
            well-informed decisions.
          </li>
        </ol>
        <h3 className="textTitles text-center m-5">Our Vision</h3>
        <p className="text-center">
          At ClearGames PH, our vision is to be the leading platform for newbie
          gamers in the Philippines, where clarity and trust are the foundation
          of every gaming experience. We aspire to build a thriving community
          that celebrates the joy of gaming, welcomes diversity, and nurtures
          the growth of every individual within the gaming world.
        </p>
        <h3 className="textTitles text-center m-5">
          Embrace the Clarity - Join ClearGames PH Today!
        </h3>
        <p className="text-center">
          Embark on your gaming journey with clarity and confidence. Discover
          exciting new games, hone your skills, and immerse yourself in an
          enriching gaming adventure with ClearGames PH. Embrace a world where
          gaming becomes more than just entertainment it becomes a passion!
        </p>
        <h4 className=" textTitlesCG text-center m-5 p-5">
          ClearGames PH - Your Window to the World of Gaming!
        </h4>
      </div>
    </div>
  );
}

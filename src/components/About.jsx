import React from "react";
import { Header } from "./Header";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

export const About = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <div className="aboutContainer">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quia quidem ad enim, deserunt, omnis consequuntur ullam sit dolorum repellat dolorem dolor temporibus quas excepturi libero ipsum inventore, nesciunt reprehenderit!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam eveniet incidunt in unde magnam iusto minus qui doloribus, explicabo dignissimos vel quisquam animi ipsam aperiam. Praesentium omnis repellendus magni necessitatibus.
        </p>
      </div>
      <Footer />
    </div>
  );
};

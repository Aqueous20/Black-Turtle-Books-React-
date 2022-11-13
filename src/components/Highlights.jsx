import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Highlight from "./ui/Highlight";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2>
            Why Choose <span className="text--orange">Black Turtles</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<FontAwesomeIcon icon="bolt" />}
              title="Easy and Quick"
              para="Get access to your books that you purchase online from us
              instantly"
            ></Highlight>
            <Highlight
              icon={<FontAwesomeIcon icon="book-open" />}
              title="10,000+ Books"
              para="Black Turtle has Books for everyone in every category"
            ></Highlight>
            <Highlight
              icon={<FontAwesomeIcon icon="tags" />}
              title="Affordable"
              para="Get your hands on popular books for as little as $10"
            ></Highlight>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Highlights;

import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
          placeat sint cum, esse nam minima saepe quisquam, illo similique
          voluptates ratione? Nisi quaerat dolore cumque alias illo odit ipsum
          amet!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
          placeat sint cum, esse nam minima saepe quisquam, illo similique
          voluptates ratione? Nisi quaerat dolore cumque alias illo odit ipsum
          amet!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;

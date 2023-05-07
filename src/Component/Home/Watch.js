import React from "react";
import "./Watch.css";

const Watch = ({ watch }) => {
  const { name, img, company, address, price, about } = watch;
  return (
    <div>
      <div class="col">
        <div class="card">
          <img src={img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">Company: {company}</p>
            <div className="card-place">
              <p class="card-details">{about}</p>
            </div>
            <p class="card-text">Price: $ {price}</p>
          </div>
          <button class="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Watch;

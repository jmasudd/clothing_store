import React from "react";
import "./collection-item.style.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className="collectionItem">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;

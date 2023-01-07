import React from "react";

const GalleryItem = ({ image }) => {
  return <div>{image ? console.log("yes") : console.log("no")}</div>;
};

export default GalleryItem;

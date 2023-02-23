import React, { useContext } from "react";
import { getContrastYIQ } from "../helpers";
import MainContext from "../MainContext";
import ClipboardButton from "react-clipboard.js";
import { BsCheckLg } from "react-icons/bs";

const Brand = ({ brand }) => {
  const { selectedBrands, setSelectedBrands, setCopied } =
    useContext(MainContext);
  const toggleSelected = () => {
    if (selectedBrands.includes(brand.slug)) {
      setSelectedBrands(selectedBrands.filter((slug) => slug !== brand.slug));
    } else {
      setSelectedBrands([...selectedBrands, brand.slug]);
    }
  };
  const colorHandle = (color) => {
    setCopied(color);
  };

  return (
    <div
      className={`brand ${
        selectedBrands.includes(brand.slug) ? "selected" : ""
      }`}
    >
      <div className="brand-title" onClick={toggleSelected}>
        <h5>{brand.title}</h5>
        <BsCheckLg className="title-icon" />
      </div>

      <div className="brand-colors">
        {brand.colors.map((color, key) => (
          <ClipboardButton
            data-clipboard-text={color}
            onSuccess={() => colorHandle(color)}
            component="span"
            key={key}
            style={{
              "--bgColor": `#${color}`,
              "--textColor": `${getContrastYIQ(color)}`,
            }}
          >
            {color}
          </ClipboardButton>
        ))}
      </div>
    </div>
  );
};

export default Brand;

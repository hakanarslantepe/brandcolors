import { useParams, Link, useHistory } from "react-router-dom";
import Brand from "./Brand";
import { useContext, useEffect } from "react";
import MainContext from "../MainContext";
import Download from "./Download";
import { GrLinkPrevious } from "react-icons/gr";

const Collection = () => {
  const history = useHistory();
  const { slugs } = useParams();
  const { brands, setSelectedBrands, selectedBrands } = useContext(MainContext);

  const clearSelectedBrands = () => {
    setSelectedBrands([]);
    history.push("/");
  };

  useEffect(() => {
    setSelectedBrands(slugs.split(","));
    console.log(selectedBrands);
  }, []);

  return (
    <main className="content">
      <header className="header">
        <Link
          style={{ textDecoration: "none" }}
          to="/"
          onClick={clearSelectedBrands}
        >
          <a className="back-btn">
            <GrLinkPrevious />
            All Brands
          </a>
        </Link>
        <Download />
      </header>
      <section className="brands">
        {selectedBrands.map((slug, key) => {
          let brand = brands.find((brand) => brand.slug === slug);
          return <Brand brand={brand} />;
        })}
      </section>
    </main>
  );
};

export default Collection;

import Search from "./Search";
import Brand from "./Brand";
import { useContext } from "react";
import MainContext from "../MainContext";
import Download from "./Download";

const Content = () => {
  const { brands} = useContext(MainContext);
  return (
    <main className="content">
      <header className="header">
        <Search />
        <Download/>
      </header>
      <section className="brands">
        {brands.map((brand, key) => (
          <Brand brand={brand} key={key} />
        ))}
      </section>
    </main>
  );
};

export default Content;

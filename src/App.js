import { useEffect, useState } from "react";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Collection from "./components/Collection";
import MainContext from "./MainContext";
import BrandsData from "./brands.json";
import Copied from "./components/Copied";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  const brandsArray = [];
  Object.keys(BrandsData).map((key) => {
    brandsArray.push(BrandsData[key]);
  });
  const [brands, setBrands] = useState(brandsArray);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [copied, setCopied] = useState(false);
  const [search, setSearch] = useState("");
  const data = {
    brands,
    setBrands,
    selectedBrands,
    setSelectedBrands,
    copied,
    setCopied,
    search,
    setSearch,
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopied(false);
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [copied]);

  useEffect(() => {
    setBrands(
      brandsArray.filter((brand) => brand.title.toLowerCase().includes(search))
    );
  }, [search]);
  return (
    <>
      <MainContext.Provider value={data}>
        <Sidebar />
        <Router>
          <Switch>
            <Route path="/" exact>
              <Content />
            </Route>
            <Route path="/collection/:slugs">
              <Collection />
            </Route>
          </Switch>
        </Router>
        {copied && <Copied colorCopied={copied} />}
      </MainContext.Provider>
    </>
  );
};

export default App;

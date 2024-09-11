import { useState } from "react";
import Title from "./components/Title";
import data from "./data";
import Menu from "./components/Menu";
import Categories from "./components/Categories";

function App() {
  const [menu, setMenu] = useState(data);
  const tempItems = ["all", ...new Set(data.map((item) => item.category))];

  const [category, setCategory] = useState(tempItems);

  const filterItems = (category) => {
    if (category === "all") {
      setMenu(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setMenu(newItems);
  };
  console.log(category);
  return (
    <>
      <section className="menu" >
        <Title />
        <Categories category={category} filterItems={filterItems}/>
        <Menu menu={menu} />
      </section>
    </>
  );
}

export default App;

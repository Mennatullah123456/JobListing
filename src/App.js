import React, { useState, useEffect } from "react";
import Main from "./Components/main/Main";
import Job from "./Components/job/Job";
import jobs from "./Components/generators/data.json";
import "./Components/_globalRules.scss";

function App() {
  const [data, setData] = useState([]);
  const [filterItem, setFilterItem] = useState([]);

  useEffect(() => {
    if (filterItem.length != 0) {
      const newData = data.filter((e) => {
        return e.languages
          .concat(e.tools)
          .join("")
          .includes(filterItem.join(""));
      });
      setData(newData);
    } else setData(jobs);
  }, [filterItem]);

  const clickHandler = (event) => {
    if (filterItem.includes(event.textContent)) return;
    setFilterItem([...filterItem, event.textContent]);
  };

  const deleteHandler = (e) => {
    const deletedItem = filterItem.indexOf(
      e.currentTarget.previousElementSibling.textContent
    );
    setFilterItem(
      filterItem.filter((ele, index) => {
        return index != deletedItem;
      })
    );
    setData(jobs);
  };

  const clearHandler = () => {
    setFilterItem([]);
  };

  return (
    <div className="App">
      <Main
        deleteHandler={deleteHandler}
        clearHandler={clearHandler}
        list={filterItem}
      />
      <Job clickHandler={clickHandler} data={data} />
    </div>
  );
}

export default App;

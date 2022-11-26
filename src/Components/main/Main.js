import React from "react";
import GenerateFilters from "../generators/GenerateFilters";
import "./Main.scss";

function Main(props) {
  let filters =
    props.list.length != 0 ? (
      <section className="filter-board">
        <article className="filters">
          <GenerateFilters
            deleteHandler={props.deleteHandler}
            list={props.list}
          />
        </article>
        <button onClick={() => props.clearHandler()} className="clear">
          Clear
        </button>
      </section>
    ) : (
      ""
    );

  return (
    <main>
      <section className="BG-top"></section>
      {filters}
    </main>
  );
}

export default Main;

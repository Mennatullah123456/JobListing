import React from "react";

function GenerateFilters(props) {
  return (
    <>
      {props.list.map((e) => {
        return (
          <article key={e} className="chosen-holder">
            <span className="chosen-item">{e}</span>
            <span
              onClick={(e) => props.deleteHandler(e)}
              className="clear-chosen"
            >
              X
            </span>
          </article>
        );
      })}
    </>
  );
}

export default GenerateFilters;

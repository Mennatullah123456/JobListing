import React from "react";

function GenerateTools(props) {
  let tools =
    props.list.tools &&
    props.list.tools.map((tool) => {
      return (
        <span
          key={tool}
          onClick={(e) => {
            props.clickHandler(e.target);
          }}
          className="langs"
        >
          {tool}
        </span>
      );
    });

  return <>{tools}</>;
}

export default GenerateTools;

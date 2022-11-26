import React from "react";

function GenerateSkills(props) {
  let languages =
    props.list.languages &&
    props.list.languages.map((lang) => {
      return (
        <span
          key={lang}
          onClick={(e) => {
            props.clickHandler(e.target);
          }}
          className="langs"
        >
          {lang}
        </span>
      );
    });

  return <>{languages}</>;
}

export default GenerateSkills;

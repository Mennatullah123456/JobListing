import React from "react";

function GenerateNew(props) {
  let newWord = props.list.new ? <span className="new">new!</span> : "";
  let featureWord = props.list.featured ? (
    <span className="feature">feature</span>
  ) : (
    ""
  );
  return (
    <>
      {newWord}
      {featureWord}
    </>
  );
}

export default GenerateNew;

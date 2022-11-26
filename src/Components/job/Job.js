import React from "react";
import GenerateJobs from "../generators/GenerateJobs";
import "./Job.scss";

function Job(props) {
  return (
    <section className="jobs-holder">
      <GenerateJobs clickHandler={props.clickHandler} jobs={props.data} />
    </section>
  );
}

export default Job;

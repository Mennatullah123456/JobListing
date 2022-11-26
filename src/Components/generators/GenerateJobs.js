import React from "react";
import GenerateNew from "./GenerateNew";
import GenerateSkills from "./GenerateSkills";
import GenerateTools from "./GenerateTools";

function GenerateJobs(props) {
  return props.jobs.map((job) => {
    return (
      <section key={job.id} className={`job ${job.featured ? "featured" : ""}`}>
        <div className="row">
          <article className="company-img col-xl-1">
            <img src={job.logo} alt="logo" />
          </article>
          <article className="main-holder col-xl-11">
            <div className="row">
              <div className="data col-lg-4">
                <div className="first-row">
                  <span className="company-name">{job.company}</span>
                  <div className="new-feature-holder">
                    <GenerateNew list={job} />
                  </div>
                </div>
                <div className="second-row">
                  <span className="position">{job.position}</span>
                </div>
                <div className="last-row">
                  <span className="date">{job.postedAt}</span>
                  <span className="contract">{job.contract}</span>
                  <span className="location">{job.location}</span>
                </div>
              </div>
              <div className="skills col-lg-6">
                <div className="skills-holder">
                  <span className="role">{job.role}</span>
                  <span className="level">{job.level}</span>
                  <GenerateSkills
                    clickHandler={props.clickHandler}
                    list={job}
                  />
                  <GenerateTools clickHandler={props.clickHandler} list={job} />
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    );
  });
}

export default GenerateJobs;

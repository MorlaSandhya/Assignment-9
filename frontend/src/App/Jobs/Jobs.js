import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import PageCard from "../../Components/PageCard/PageCard";
import Start from "../../CardComponents/Start"

const Jobs = () => {
  return (
    <div>
      <Navbar />
      <PageCard
        title={"Jobs Page"}
        desc={
          "Employment Opportunities The Career and Internship Center at UW provides students with the opportunity to gain a job, especially through their HuskyJobs system, a database that tells students any job openings or internships all over campus. The jobs with the most availability on campus are in the library, housing and food services, department of recreational sports, the university bookstore, and the UW foundation - student calling system. However, some of the academic apartments also offer internships to students, and those positions are very competitive since it gives a boost to one’s career, but there are also job opportunities in the athletic department. Compared to other schools, there are definitely many on campus job"
        }
      />
      <Start/>
    </div>
  );
};

export default Jobs;

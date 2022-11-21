import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import PageCard from "../../Components/PageCard/PageCard";
import axios from "axios";
import classes from "./About.module.css";

const About = () => {
  const [users, setusers] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("http://localhost:8080/user/getAll");
      console.log(data.data.data);
      setusers(data.data.data);
    };
    getData();
  }, []);

  return (
    <div>
      <Navbar />
      <PageCard
        title={"About Page"}
        desc={
          "Worked as an Analyst with Consulting practice having 1 year of experience in ServiceNow Development. has global delivery experience of working for clients based out of UK. My areas of expertise include developing, customizing, configuring, deploying, administrating. Have an excellent analytical, problem solving, communication and interpersonal skills with ability to interact with individuals at all levels and can work as a part of a team as well as independently.I have worked on projects involving end to end Service Now implementation from design to testing and Go lives. Has a vast experience in Custom Application, Portal and Custom Widget."
        }
      />
      <div className={classes.cardContainer}>
        {users.map((element) => (
          <UserCard email={element.full_name} />
        ))}
      </div>
    </div>
  );
};

const UserCard = ({ email }) => {
  return <div className={classes.card}>{email}</div>;
};

export default About;

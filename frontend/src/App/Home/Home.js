import React  from "react";
// import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import PageCard from "../../Components/PageCard/PageCard";
// import classes from "./Home.module.css";
// import axios from "axios";

const Home = () => {
  // const [data, setdata] = useState({
  //   email: "",
  //   password: "",
  // });
  // const [message, setmessage] = useState("");

  // const change = (e) => {
  //   const temp = { ...data };
  //   temp[e.target.name] = e.target.value;
  //   setdata(temp);
  // };

  // const submit = async () => {
  //   try {
  //     const apiData = await axios.post(
  //       "http://localhost:8080/user/login",
  //       data
  //     );
  //     setmessage(apiData.data.data.message);
  //     console.log(apiData.data.data.message);
  //   } catch (error) {
  //     console.log(error.response);
  //     setmessage(error.response.data.error);
  //   }
  // };

  return (
    <div>
      <Navbar />
      <PageCard
        title={"Find Your Career ! Your deserve it"}
        desc={
          "It’s Experience That Makes the Difference.A Northeastern University graduate education is different; it’s experiential. You don’t just earn a Northeastern master’s degree, graduate certificate, or doctorate, you gain the hands-on experience you need to advance in your current industry or break into your desired field.  Northeastern offers more than 200 graduate programs—in on-campus, online, and hybrid formats—in a variety of growing industries"
        }
      />
 
    </div>
  );
};

export default Home;

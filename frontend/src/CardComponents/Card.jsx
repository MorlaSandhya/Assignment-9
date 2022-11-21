import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";


function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.company}</h2>
        <br/>
        <br/>
        <h3 className="name">{props.jobtitle}</h3>
  
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Detail detailInfo={props.jobdescriptions} />
        <Detail detailInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;

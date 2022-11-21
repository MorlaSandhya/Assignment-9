import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import classes from "./Login.module.css";


const Login = () => {
    const [data, setdata] = useState({
        email: "",
        password: "",
      });
      const [message, setmessage] = useState("");
    const navigate = useNavigate();
    const change = (e) => {
        const temp = { ...data };
        temp[e.target.name] = e.target.value;
        setdata(temp);
      };
    
      const submit = async () => {
        try {
          const apiData = await axios.post(
            "http://localhost:8080/user/login",
            data
          );
          navigate('/home')
          setmessage(apiData.data.data.message);
          console.log(apiData.data.data.message);
        } catch (error) {
          console.log(error.response);
          setmessage(error.response.data.error);
        }
      };
  return (
    <div className={classes.inputContainer}>
        <h1>Login to your applications</h1>
        <input
        className={classes.Input}
        name="email"
        type="email"
        placeholder="Enter email"
        value={data.email}
        onChange={change}
        />
        <input
        password="*******"
        type="password"
        className={classes.Input}
        name="password"
        placeholder="Enter Password"
        value={data.password}
        onChange={change}
        />
        <button onClick={submit} className={classes.Submit}>
        Submit
        </button>
        <br />
        <div>{message}</div>
  </div>
  );
}

export default Login;
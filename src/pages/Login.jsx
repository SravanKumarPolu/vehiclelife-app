import React from "react"
import {
    
   
   useLoaderData,
   useNavigate
} from "react-router-dom"
import { loginUser } from "../api";

export function loader({request}){
  return new URL(request.url).searchParams.get("message")
}


export default function Login() {
  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: ""
  });
  const [status,setStatus]=React.useState("idle")
  const [error,setError]=React.useState(null)
const message = useLoaderData();
const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting")
    setError(null)
    loginUser(loginFormData)
    // .then(data=>console.log(data))
    .then(data=>{
      navigate("/about",{replace:true})
    })
    .catch(err=>setError(err))
    .finally(()=>setStatus("idle"))
    console.log(loginFormData);
  }

  function handleChange(e) {
    const { name, value } = e.target; // Fix typo from 'e.tartget' to 'e.target'
    setLoginFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

    return (
      <div className="login-container">
      <h1>Sing in to your account</h1>
      {message && <h4 className="loginRed">{message}</h4>}
      {error && <h4 className="loginRed">{error.message}</h4>}
      <form onSubmit={handleSubmit} className="login-form">
          <input 
          name="email" onChange={handleChange} type="email"
          placeholder="Email address"
          value={loginFormData.email} />
          <input name="password" onChange={handleChange}
          type="password" placeholder="Password"
          value={loginFormData.password} />
          <button disabled={status==="submitting"}>
          {status==="submitting"? "Login in ...":"Log in"}</button>
      </form>
  </div> 
    )
}
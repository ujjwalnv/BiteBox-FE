import React from "react";
import Cookies from 'js-cookie';
import { useSnackbar } from 'notistack'
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const { enqueueSnackbar } = useSnackbar()
    const navigate = useNavigate();

  async function handleOnSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    
    const result = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Object.fromEntries(form.entries())),
    });

    const res = await result.json();
    if(result.ok){
        console.log(res.access_token);
        // Set access token in cookie
        Cookies.set('access_token', res.access_token, { expires: 7 });
        
        // Redirect to homepage
        navigate('/');

    }
    else{
        //Alert
        enqueueSnackbar(res.message, { variant: "error" });
    }
  }

  return (
    <div className="flex flex-col mx-auto w-1/3 m-1 p-4">
      <div className="flex mx-auto text-2xl font-bold border-double border-2 border-black p-4">
        BiteBox Login
      </div>
      <form className="mt-5" onSubmit={handleOnSubmit}>
        <label className="flex flex-col" htmlFor="email">
          <div className="flex w-1/3">Email</div>
          <input
            className="flex mx-auto mt-1 mb-1 border-solid border-2 border-black p-1 w-full"
            type="email"
            name="email"
            id=""
          />
        </label>
        <label className="flex flex-col" htmlFor="email">
          <div className="flex w-1/3">Password</div>
          <input
            className="flex mx-auto mt-1 mb-1 border-solid border-2 border-black p-1 w-full"
            type="password"
            name="password"
            id=""
          />
        </label>
        <button
          className="w-full mt-2 bg-orange-300 border-solid border-2 border-black p-1"
          type="submit"
        >
          Login
        </button>
      </form>
      <Link to='/register'>
      <div className="mt-1 text-blue-500 italic">Not a user? Register</div>
      </Link>
    </div>
  );
};

export default Login;

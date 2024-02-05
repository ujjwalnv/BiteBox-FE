import { useSnackbar } from 'notistack';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const { enqueueSnackbar } = useSnackbar()
    const navigate = useNavigate();

  async function handleOnSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    
    const result = await fetch("http://localhost:8080/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Object.fromEntries(form.entries())),
    });

    const res = await result.json();
    console.log(res);
    if(result.ok){
        // Redirect to homepage
        enqueueSnackbar(res.message, { variant: "success" });
        navigate('/login');

    }
    else{
        //Alert
        enqueueSnackbar(res.message, { variant: "error" });
    }
  }

  return (
    <div className="flex flex-col mx-auto w-1/3 m-1 p-4">
      <div className="flex mx-auto text-2xl font-bold border-double border-2 border-black p-4">
        BiteBox Register
      </div>
      <form className="mt-5" onSubmit={handleOnSubmit}>
      <label className="flex flex-col" htmlFor="name">
          <div className="flex w-1/3">Name</div>
          <input
            className="flex mx-auto mt-1 mb-1 border-solid border-2 border-black p-1 w-full"
            type='text'
            name="name"
            id=""
          />
        </label>
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
          Register
        </button>
      </form>
      <Link to='/login'>
      <div className="mt-1 text-blue-500 italic">Already a user? Login</div>
      </Link>
    </div>
  )
}

export default Register
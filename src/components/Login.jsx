import { Link } from "react-router-dom"
import { useState } from "react"



const Login = () => {

  function handleLogin() {
    console.log("Loggin in")
  }


  return (
    <>
      <div />
      <h1 className="font-semibold text-blue-400 text-3xl w-[5%] mx-auto mt-[20px]">Login</h1>
      <div
      className="bg-white w-4/12 mx-auto mt-[90px]
        rounded-lg h-[305px] w-[500px] border-2 border-gray-100 shadow-lg shadow-gray-350/50
      "
      >
        <form className="py-[25px] pl-[65px]">
          <div className="mb-5">
            <label className="text-gray-600 text-base">Email</label> <br />
            <input type="email" placeholder="Email" 
              value=""
              className="px-[20px] py-3 border-2 rounded outline-none w-[350px] focus:border-2 focus:border-blue-400"
              onChange={() => {}}
            />
          </div>

          <div className="mb-5">
            <label className="text-gray-600 text-base">Password</label> <br />
            <input type="password" placeholder="password" 
              value=""
              className="px-[20px] py-3 border-2 rounded outline-none w-[350px] focus:border-2 focus:border-blue-400"
              onChange={() => {}}
            />
          </div>
          
          <button className="border-0 px-5 py-2 rounded-lg bg-blue-400 text-white outline-none
                text-xl font-semibold mx-auto"
                onClick={handleLogin}
          >
            Login
          </button>
        </form>

        <div className="flex justify-between mt-8 text-lg text-gray-500">
          <Link to="/dashboard" onClick={() => {}}>Forgot Password</Link>
          <Link to="/signup" onClick={() => {}}>Sign up</Link>
        </div>
      </div>
    </>

  )
}

export default Login

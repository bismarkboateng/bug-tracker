import { Link } from "react-router-dom"



const Signup = () => {
  return (
    <>
      <h1 className="text-gray-500 text-3xl w-[5%] mx-auto mt-[20px]">Signup</h1>
      <div
      className="bg-white w-4/12 mx-auto mt-[90px]
        rounded-lg h-[400px] w-[640px]">
        <form className="py-[25px] pl-[65px] w-full">

          <div className="mb-5 flex">
            <div className="mr-5">
              <label className="text-gray-600 text-base">First name</label> <br />
              <input type="text" placeholder="Firstname" 
                className="px-[10px] py-3 border-2 rounded outline-none w-[250px] focus:border-2 focus:border-blue-400"
              />
            </div>

            <div>
              <label className="text-gray-600 text-base">Last name</label> <br />
              <input type="text" placeholder="Last name" 
                className="px-[10px] py-3 border-2 rounded outline-none w-[250px] focus:border-2 focus:border-blue-400"
              />
            </div>
          </div>

          <div className="mb-5">
             <label className="text-gray-600 text-base">Email</label> <br />
              <input type="email" placeholder="Email" 
                className="px-[20px] py-3 border-2 rounded outline-none w-[517px] focus:border-2 focus:border-blue-400"
              />
          </div>

          <div className="mb-5">
             <label className="text-gray-600 text-base">Password</label> <br />
              <input type="password" placeholder="password" 
                className="px-[20px] py-3 border-2 rounded outline-none w-[517px] focus:border-2 focus:border-blue-400"
              />
          </div>
          
          <button className="border-0 h-[50px] w-[120px] rounded-lg bg-blue-400 text-white outline-none
                text-xl 
          ">
            Signup
          </button>
        </form>

        <div className="flex justify-between mt-5 text-lg text-gray-500">
          <Link to="/dashboard">Forgot Password</Link>
          <Link to="/login">Log in</Link>
        </div>
      </div>
    </>
  )
}

export default Signup;

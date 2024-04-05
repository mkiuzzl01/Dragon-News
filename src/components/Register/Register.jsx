import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const pass = form.get('password');
    const accept = form.get('accept');
    console.log(name,email,pass,accept);
  };
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <div className="w-full m-auto max-w-md p-8 space-y-3 rounded-xl bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
        <h1 className="text-2xl font-bold text-center">
          Register your account
        </h1>
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="Name" className="block font-semibold">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="username"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-[#F3F3F3] text-gray-100 dark:text-gray-800 focus:border-violet-400 focus:dark:border-violet-600"
              required
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block font-semibold">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="username"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-[#F3F3F3] text-gray-100 dark:text-gray-800 focus:border-violet-400 focus:dark:border-violet-600"
              required
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block font-semibold">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-[#F3F3F3] text-gray-100 dark:text-gray-800 focus:border-violet-400 focus:dark:border-violet-600"
              required
            />
            <div className="flex items-center">
              <label className="label cursor-pointer">
                <input name="accept" type="checkbox" className="checkbox" />
                <span className="label-text mx-2">Trams and Condition</span>
              </label>
            </div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-gray-900 dark:text-gray-50 bg-[#403F3F]">
            Register
          </button>
        </form>
        <p className="font-semibold text-center">
          Don have an account?
          <Link to="/Login" className="link text-red-500">
            LogIn
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

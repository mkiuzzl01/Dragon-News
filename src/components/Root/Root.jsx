import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";

const Root = () => {
  return (
    <div className="max-w-6xl m-auto font-Poppins">
       <Outlet></Outlet>
    </div>
  );
};

export default Root;

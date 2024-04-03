import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="max-w-6xl m-auto font-Poppins">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
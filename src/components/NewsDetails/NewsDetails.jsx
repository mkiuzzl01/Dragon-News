import PropTypes from "prop-types";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import RightSideNav from "../RightSideNav/RightSideNav";

const NewsDetails = (props) => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <h1>This is News Details ID: {id}</h1>
        </div>
        <div className="col-span-1">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

NewsDetails.propTypes = {};

export default NewsDetails;

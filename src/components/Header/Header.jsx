import moment from "moment";
import logo from "../../assets/images/logo.png";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <div>
      <div className="text-center">
      <img src={logo} alt="" className="w-1/2 m-auto" />
      <p>Journalism Without Fear or Favour</p>
      <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>

      <div className="flex items-center">
        <button className="btn btn-secondary">Latest</button>
        <Marquee pauseOnHover speed={100} className="space-x-6">
          I can be a React component, multiple React components, or just some
          text. I can be a React component, multiple React components, or just
          some text. I can be a React component, multiple React components, or
          just some text.
        </Marquee>
      </div>
    </div>
  );
};

export default Header;

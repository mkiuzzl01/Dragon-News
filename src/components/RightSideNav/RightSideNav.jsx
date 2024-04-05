import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

import img_1 from '../../assets/images/qZone1.png'
import img_2 from '../../assets/images/qZone2.png'
import img_3 from '../../assets/images/qZone3.png'
import banner from '../../assets/images/bg.png'
const RightSideNav = () => {
  return (
    <div className="sticky top-0">
      <div className="space-y-2 mb-4">
        <h1 className="text-2xl font-semibold">Login With</h1>
        <div>
          <p className="flex items-center space-x-3 border-2 rounded-lg p-2">
            <span>
              <FaGoogle />
            </span>
            <span>Login with google</span>
          </p>
        </div>
        <div>
          <p className="flex items-center space-x-3 border-2 rounded-lg p-2">
            <span>
              <FaGithub />
            </span>
            <span>Login with GitHub</span>
          </p>
        </div>
      </div>

      <div className="mb-4">
        <h1 className="text-2xl font-semibold mb-4">Find Us On</h1>
        <div className="border-2 rounded-lg">
          <div>
            <p className="flex items-center space-x-3 p-2">
              <span></span>
              <CiFacebook />
              <span>Login with Facebook</span>
            </p>
          </div>
          <div>
            <p className="flex items-center space-x-3 border-y-2 p-2">
              <span>
                <CiTwitter />
              </span>
              <span>Login with Twitter</span>
            </p>
          </div>
          <div>
            <p className="flex items-center space-x-3 p-2">
              <span>
                <FaInstagram />
              </span>
              <span>Login with Instagram</span>
            </p>
          </div>
        </div>
      </div>
    {/* Q-Zone */}
      <div className="bg-gray-100 mb-4">
        <h1 className="ext-2xl font-semibold p-4">Q-Zone</h1>
        <div>
            <img src={img_1} alt="" />
        </div>
        <div>
            <img src={img_2} alt="" />
        </div>
        <div>
            <img src={img_3} alt="" />
        </div>
      </div>

      {/* banner */}
      <div style={{ backgroundImage: `url(${banner})` }} className="text-white text-center p-8 space-y-4">
        <p className="text-3xl font-semibold">Create an <br /> Amazing <br /> Newspaper</p>
        <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
        <button className="btn btn-secondary rounded-none">Lear more</button>
      </div>
    </div>
  );
};

export default RightSideNav;

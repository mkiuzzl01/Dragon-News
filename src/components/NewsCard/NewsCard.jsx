import PropTypes from "prop-types";
import { CiCalendar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news, home, sideBar }) => {
  const { title, author, details,_id} = news;
  return (
    <div>
      <div className={sideBar ? "visible" : "hidden"}>
        <div className="card bg-base-100 shadow-lg p-2 mb-4">
          <figure>
            <img src={news.thumbnail_url} alt={title} />
          </figure>
          <div className="card-body p-2">
            <h2 className="font-semibold">{title}</h2>
            <div className="card-actions flex justify-between">
              <p>Sports</p>
              <p className="flex items-center space-x-2">
                <span>
                  <CiCalendar />
                </span>
                <span>{author.published_date}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={home ? "visible" : "hidden"}>
        <div className="flex flex-col mb-4 p-6 space-y-6 overflow-hidden rounded-lg shadow-md text-black">
          <div>
            <div className="flex flex-row-reverse justify-between">
             <div>
             <button
                aria-label="Bookmark this post"
                type="button"
                className="p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 fill-current text-violet-400 dark:text-violet-600"
                >
                  <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                </svg>
              </button>
              <button
                aria-label="Share this post"
                type="button"
                className="p-2 text-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 fill-current text-violet-400 dark:text-violet-600"
                >
                  <path d="M404,344a75.9,75.9,0,0,0-60.208,29.7L179.869,280.664a75.693,75.693,0,0,0,0-49.328L343.792,138.3a75.937,75.937,0,1,0-13.776-28.976L163.3,203.946a76,76,0,1,0,0,104.108l166.717,94.623A75.991,75.991,0,1,0,404,344Zm0-296a44,44,0,1,1-44,44A44.049,44.049,0,0,1,404,48ZM108,300a44,44,0,1,1,44-44A44.049,44.049,0,0,1,108,300ZM404,464a44,44,0,1,1,44-44A44.049,44.049,0,0,1,404,464Z"></path>
                </svg>
              </button>
             </div>
              <div className="flex space-x-4">
            <img
              alt=""
              src={author.img}
              className="object-cover w-12 h-12 rounded-full shadow bg-gray-500 dark:bg-gray-500"
            />
            <div className="flex flex-col space-y-1">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-sm font-semibold"
              >
                Leroy Jenkins
              </a>
              <span className="text-xs text-gray-400 dark:text-gray-600">
                4 hours ago
              </span>
            </div>
          </div>
            </div>
            <div className="flex space-x-2 text-sm text-gray-400 dark:text-gray-600"></div>
          </div>
         
          <div>
          <h2 className="mb-1 text-xl font-semibold">{title}</h2>
            <img
              src={news.image_url}
              alt=""
              className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500 dark:bg-gray-500"
            />
            <p className="text-sm text-gray-400 dark:text-gray-600">
              {
                details.length>200?
                <>
                <p>{details.slice(0,200)}
                <Link to={`/News/${_id}`} className='text-blue-500 font-semibold'> Read More...</Link>
                </p>
                </>:
                <>
                <p>{details}</p>
                </>
              }
              </p>
            <div className="flex justify-between border-t-2 mt-2">
                <p className="flex items-center space-x-2"><span className="flex text-yellow-500"><FaStar /> <FaStar /> <FaStar /></span> <span>{news.rating.number}</span></p>
                <p className="flex items-center space-x-2"><FaRegEye /><span>{news.total_view}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  news: PropTypes.object,
  home:PropTypes.bool,
  sideBar:PropTypes.bool
};

export default NewsCard;
